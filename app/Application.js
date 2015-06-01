Ext.define('LinkExPortal.Application', {
    extend: 'Ext.app.Application',
    name: 'LinkExPortal',
    /*views: [
        'LinkExPortal.view.loginForm.LoginForm',
        'LinkExPortal.view.main.Main',
        'LinkExPortal.view.studentMain.StudentMain',
        'LinkExPortal.view.sponsorMain.SponsorMain',
        'LinkExPortal.view.heiMain.HeiMain'
    ],*/
    models: [
        'CountryList',
        'ProfessionalBodiesList',
        'EthnicitiesList',
        'GendersList',
        'AcademicYearsList',
        'StudentExperience',
        'CPDHealthApplicationForm',
        'CPDHealthApplication',
        'StudentQualification',
        'StudentReference',
        'TitleList',
        'AvailableCreditOptions',
        'commissionedcourses',
        'course',
        'coursesession',
        'CourseType',
        'FTPTList',
        'hei',
        'sponsor',
        'Account',
        'AspNetUser',
        'UserProfileInfo',
        'CPDHealthApplicationTemp',
        'StudentExperienceSubmittedForApplication',
        'StudentQualificationSubmittedForApplication',
        'StudentReferencesSubmittedForApplication',
        'CPDHealthApplicationFormSponsor',
        'CPDHealthApplicationFormHEI'
    ],
    launch: function () {
        // Add the additional 'advanced' VTypes
        Ext.apply(Ext.form.field.VTypes, {
            email: function(val, field) {
                if (field.initialEmailField) {
                    var pwd = field.up('form').down('#' + field.initialEmailField);
                    return (val == pwd.getValue());
                }
                return true;
            },
            passwordText: 'Email addresses do not match'

        });
        Ext.define('LinkExPortal.global.Vars', {
            singleton: true,
            loginToken: undefined,
            defaultUrl: 'https://localhost:44306',  //http://linkexwebapi.azurewebsites.net
            courseID: {
                value: '-1',
                name: '',
                present: false
            },
            HEIID: {
                value: '-1',
                name: '',
                present: false
            },
            applicationID: {
                value: '-1',
                present: false
            },
            courseSessionID: {
                value: '-1',
                present: false,
                text: ''
            },
            trustID: {
                value: '-1',
                name: '',
                present: false
            },
            courseCode: '',
            academicYear: '',
            showApplicationForm: false,
            showSearchScreen: false,
            showTrustScreen: false,
            showCommissionedCoursesScreen: false,
            showHEIBox: false,
            applicationFormSubmitted: false,
            applicationRecordExists: false,
            searchCourseTypeID: -1,
            searchHEIID: -1,
            searchAcademicYearID: -1,
            searchKeywords: '',
            searchFilters: new Ext.util.Collection({
                extraKeys: {
                    byName: 'name' // based on "name" property of each item
                }
            })
        });
        Ext.define('LinkExPortal.global.Utils', {
            singleton: true,
            calculateHideAndShow: function() {
                LinkExPortal.global.Vars.showApplicationForm = (LinkExPortal.global.Vars.applicationID.present || (LinkExPortal.global.Vars.trustID.present && LinkExPortal.global.Vars.courseID.present)) && !LinkExPortal.global.Vars.applicationFormSubmitted;
                LinkExPortal.global.Vars.showSearchScreen = !LinkExPortal.global.Vars.applicationID.present && LinkExPortal.global.Vars.trustID.present && LinkExPortal.global.Vars.trustID.value == 0 && !LinkExPortal.global.Vars.courseID.present;
                LinkExPortal.global.Vars.showTrustScreen = !LinkExPortal.global.Vars.trustID.present;
                LinkExPortal.global.Vars.showHEIBox = !LinkExPortal.global.Vars.HEIID.present;
                LinkExPortal.global.Vars.showCommissionedCoursesScreen = !LinkExPortal.global.Vars.applicationID.present && LinkExPortal.global.Vars.trustID.present && !LinkExPortal.global.Vars.courseID.present && (LinkExPortal.global.Vars.trustID.value > 0);
                //alert('ShowSearchScreen=' + LinkExPortal.global.Vars.showSearchScreen + '|ShowCommissionedCoursesScreen=' + LinkExPortal.global.Vars.showCommissionedCoursesScreen);
            },
            clearGlobalVars: function() {
                LinkExPortal.global.Vars.courseID = { value: '-1', name: '', present: false };
                LinkExPortal.global.Vars.HEIID = { value: '-1', name: '', present: false };
                LinkExPortal.global.Vars.applicationID = { value: '-1', name: '', present: false };
                LinkExPortal.global.Vars.trustID = { value: '-1', name: '', present: false };
            },
            addGlobalsToMainViewModel: function() {
                this.getViewModel().set('courseID', LinkExPortal.global.Vars.courseID.value);
                this.getViewModel().set('HEIID', LinkExPortal.global.Vars.HEIID.value);
                this.getViewModel().set('applicationID', LinkExPortal.global.Vars.applicationID.value);
                this.getViewModel().set('courseSessionID', LinkExPortal.global.Vars.courseSessionID.value);
                this.getViewModel().set('showApplicationForm', LinkExPortal.global.Vars.showApplicationForm);
                this.getViewModel().set('showSearchScreen', LinkExPortal.global.Vars.showSearchScreen);
                this.getViewModel().set('showTrustScreen', LinkExPortal.global.Vars.showTrustScreen);
                this.getViewModel().set('showHEIBox', LinkExPortal.global.Vars.showHEIBox);
                this.getViewModel().set('applicationFormSubmitted', LinkExPortal.global.Vars.applicationFormSubmitted);
            },
            getCourseIdFromCourseSession: function(courseSessionId) {
                //TODO: THIS SHOULD BE DEPRECATED IN FAVOUR OF A MORE GENERAL FUNCTION getInfoFromCourseSession
                Ext.Ajax.request({ url: LinkExPortal.global.Vars.defaultUrl + '/application/Refs/getCourseFromCourseSession/' + courseSessionId,
                    method: 'GET',
                    success: function(responseObject) {
                        var obj = Ext.decode(responseObject.responseText);
                        if (obj) {
                            LinkExPortal.global.Vars.courseID = { present: true, value: courseID};
                            return obj.CourseID;
                        }
                    },
                    failure: function(responseObject) {
                        var obj = Ext.decode(responseObject.responseText);
                        Ext.Msg.alert('Status', 'Could not retrieve course information.');
                    }
                });
            },
            getInfoFromCourseSession: function(courseSessionId) {
                //TODO: THIS SHOULD ultimately replace getCourseIdFromCourseSession (above)
                Ext.Ajax.request({ url: LinkExPortal.global.Vars.defaultUrl + '/application/Refs/CourseSessionInfo/' + courseSessionId,
                    method: 'GET',
                    success: function(responseObject) {
                        var obj = Ext.decode(responseObject.responseText);
                        if (obj) {
                            return obj;
                        }
                    },
                    failure: function(responseObject) {
                        var obj = Ext.decode(responseObject.responseText);
                        Ext.Msg.alert('Status', 'Could not retrieve course information.');
                    }
                });
            },
            getAppropriateView: function() {
                var screen = 'studentmain';
                if (LinkExPortal.global.Vars.applicationID.present) {
                    screen = 'app-main';
                } else {
                    Ext.Ajax.request({
                        url: LinkExPortal.global.Vars.defaultUrl + '/user/getrole',
                        async: false,
                        method: 'GET',
                        success: function (responseObject) {
                            var obj = Ext.decode(responseObject.responseText);
                            var userRole = obj.data.role;
                            if (userRole == 'SPONSOR') {
                                screen = 'sponsormain';
                            }
                            if (userRole == 'HEI') {
                                screen = 'heimain'
                            }
                        },
                        failure: function (responseObject) {
                            //Should probably assume student role here.
                            Ext.Msg.alert('ERROR', 'User information could not be retrieved');
                        }
                    });
                }
                return screen;
            }
        });

        var queryString = Ext.Object.fromQueryString(location.search);
        if (queryString != null)
        {
            if ((queryString.courseid != null) && (queryString.courseid > 0))
            {
                LinkExPortal.global.Vars.courseID.value = queryString.courseid;
                LinkExPortal.global.Vars.courseID.present = true;
            }
            if ((queryString.heiid != null) && (queryString.heiid > 0))
            {
                LinkExPortal.global.Vars.HEIID.value = queryString.heiid;
                LinkExPortal.global.Vars.HEIID.present = true;
            }
            if (queryString.coursecode != null)
            {
                LinkExPortal.global.Vars.courseCode = queryString.coursecode;
            }
            if (queryString.academicyear != null)
            {
                LinkExPortal.global.Vars.academicYear = queryString.academicyear;
            }
            if ((queryString.applicationid != null) && (queryString.applicationid > 0))
            {
                LinkExPortal.global.Vars.applicationID.value = queryString.applicationid;
                LinkExPortal.global.Vars.applicationID.present = true;
            }
            if ((queryString.coursesessionid != null) && (queryString.coursesessionid > 0))
            {
                LinkExPortal.global.Vars.courseSessionID.value = queryString.coursesessionid;
                LinkExPortal.global.Vars.courseSessionID.present = true;
            }
            if ((queryString.trustid != null) && (queryString.trustid > 0))
            {
                LinkExPortal.global.Vars.trustID.value = queryString.trustid;
                LinkExPortal.global.Vars.trustID.present = true;
            }
            LinkExPortal.global.Utils.calculateHideAndShow();
        }

        var supportsLocalStorage = Ext.supports.LocalStorage, loggedIn;
        if (!supportsLocalStorage) {
            // Alert the user if the browser does not support localStorage
            Ext.Msg.alert('Your Browser Does Not Support Local Storage');
            return;
        }
        LinkExPortal.global.Vars.loginToken = localStorage.getItem("LinkExAccessToken");
        if (LinkExPortal.global.Vars.loginToken) {
            Ext.Ajax.setDefaultHeaders({
                'Authorization': 'Bearer ' + LinkExPortal.global.Vars.loginToken
            });
        }
        //SWITCHING THEMES
        /*if (LinkExPortal.global.Vars.HEIID.present) {
            if (LinkExPortal.global.Vars.HEIID.value == 1) {
                Ext.util.CSS.swapStyleSheet( 'styles', url );
            }
            if (LinkExPortal.global.Vars.HEIID.value == 2) {
                Ext.util.CSS.swapStyleSheet( 'styles', url );
            }
        }*/
        var newApplicationParams = (LinkExPortal.global.Vars.trustID.present || LinkExPortal.global.Vars.HEIID.present || LinkExPortal.global.Vars.courseID.present);
        if (newApplicationParams) {
            Ext.widget('app-main');
        } else {
            var form = LinkExPortal.global.Vars.loginToken ? LinkExPortal.global.Utils.getAppropriateView() : 'loginform';
            Ext.widget(form);
        }
    }
});
