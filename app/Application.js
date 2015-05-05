Ext.define('LinkExPortal.Application', {
    extend: 'Ext.app.Application',
    name: 'LinkExPortal',
    stores: [
    ],
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
        'sponsor'
    ],
    launch: function () {
        Ext.define('LinkExPortal.global.Vars', {
            singleton: true,
            loginToken: undefined,
            courseID: {
                value: '-1',
                present: false
            },
            HEIID: {
                value: '-1',
                present: false
            },
            applicationID: {
                value: '-1',
                present: false
            },
            courseSessionID: {
                value: '-1',
                present: false
            },
            trustID: {
                value: '-1',
                present: false
            },
            showApplicationForm: false,
            showSearchScreen: false,
            showTrustScreen: false,
            showCommissionedCoursesScreen: false,
            showHEIBox: false,
            applicationFormSubmitted: false,
            applicationRecordExists: false
        });
        Ext.define('LinkExPortal.global.Utils', {
            singleton: true,
            calculateHideAndShow: function() {
                LinkExPortal.global.Vars.showApplicationForm = LinkExPortal.global.Vars.applicationID.present || (LinkExPortal.global.Vars.trustID.present && LinkExPortal.global.Vars.courseID.present);
                LinkExPortal.global.Vars.showSearchScreen = !LinkExPortal.global.Vars.applicationID.present && LinkExPortal.global.Vars.trustID.present && !LinkExPortal.global.Vars.courseID.present;
                LinkExPortal.global.Vars.showTrustScreen = !LinkExPortal.global.Vars.trustID.present;
                LinkExPortal.global.Vars.showHEIBox = !LinkExPortal.global.Vars.HEIID.present;
                LinkExPortal.global.Vars.showCommissionedCoursesScreen = !LinkExPortal.global.Vars.applicationID.present && LinkExPortal.global.Vars.trustID.present && !LinkExPortal.global.Vars.courseID.present && (LinkExPortal.global.Vars.trustID.value > 0);
            },
            addGlobalsToMainViewModel: function() {
                this.getViewModel().set('courseID', LinkExPortal.global.Vars.courseID.value);//Ext.create('User', result.data.user));
                this.getViewModel().set('HEIID', LinkExPortal.global.Vars.HEIID.value);
                this.getViewModel().set('applicationID', LinkExPortal.global.Vars.applicationID.value);
                this.getViewModel().set('courseSessionID', LinkExPortal.global.Vars.courseSessionID.value);
                this.getViewModel().set('showApplicationForm', LinkExPortal.global.Vars.showApplicationForm);
                this.getViewModel().set('showSearchScreen', LinkExPortal.global.Vars.showSearchScreen);
                this.getViewModel().set('showTrustScreen', LinkExPortal.global.Vars.showTrustScreen);
                this.getViewModel().set('showHEIBox', LinkExPortal.global.Vars.showHEIBox);
                this.getViewModel().set('applicationFormSubmitted', LinkExPortal.global.Vars.applicationFormSubmitted);
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
        //SWITCHING THEMES
        /*if (LinkExPortal.global.Vars.HEIID.present) {
            if (LinkExPortal.global.Vars.HEIID.value == 1) {
                Ext.util.CSS.swapStyleSheet( 'styles', url );
            }
            if (LinkExPortal.global.Vars.HEIID.value == 2) {
                Ext.util.CSS.swapStyleSheet( 'styles', url );
            }
        }*/
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            autoShow: 'true',
            items: [{
                region: 'center',
                xtype: 'app-main'
            }]
        });
    }
});
