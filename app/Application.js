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
        'AcademicYearsList'/*
        'Course',
        'CPDHealthApplicationForm',
        'StudentQualification',
        'StudentExperience',
        'StudentReference'*/
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
            }
        });
        var queryString = Ext.Object.fromQueryString(location.search);
        if (queryString != null)
        {
            if ((queryString.courseid != null) && (queryString.courseid > 0))
            {
                LinkExPortal.global.Vars.courseID.value = queryString.courseid;
                LinkExPortal.global.Vars.courseID.present = true;
            };
            if ((queryString.HEIID != null) && (queryString.HEIID > 0))
            {
                LinkExPortal.global.Vars.HEIID.value = queryString.HEIID;
                LinkExPortal.global.Vars.HEIID.present = true;
            };
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