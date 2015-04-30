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
        'TitleList'
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
            showApplicationForm: true,
            showOopsScreen: false,
            applicationFormSubmitted: false
        });
        var queryString = Ext.Object.fromQueryString(location.search);
        if (queryString != null)
        {
            if ((queryString.courseid != null) && (queryString.courseid > 0))
            {
                LinkExPortal.global.Vars.courseID.value = queryString.courseid;
                LinkExPortal.global.Vars.courseID.present = true;
            }
            if ((queryString.HEIID != null) && (queryString.HEIID > 0))
            {
                LinkExPortal.global.Vars.HEIID.value = queryString.HEIID;
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
            LinkExPortal.global.Vars.showApplicationForm = LinkExPortal.global.Vars.applicationID.present || LinkExPortal.global.Vars.courseSessionID.present;
            LinkExPortal.global.Vars.showOopsScreen = !(LinkExPortal.global.Vars.showApplicationForm);
        }
        if (LinkExPortal.global.Vars.HEIID.present) {
            if (LinkExPortal.global.Vars.HEIID.value == 1) {
                Ext.util.CSS.swapStyleSheet( 'styles', url );
            }
            if (LinkExPortal.global.Vars.HEIID.value == 2) {
                Ext.util.CSS.swapStyleSheet( 'styles', url );
            }
        }

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
