Ext.define('LinkExPortal.Application', {
    extend: 'Ext.app.Application',
    name: 'LinkExPortal',
    stores: [
    ],
    models: [
        'CountryList',
        'ProfessionalBodiesList',
        'EthnicitiesList',
        'GendersList'/*
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
            courseID: '-1'
        });
        var queryString = Ext.Object.fromQueryString(location.search);
        if (queryString != null)
        {
            if ((queryString.courseid != null) && (queryString.courseid > 0))
            {
                LinkExPortal.global.Vars.courseID = queryString.courseid;
                alert('Course ID: ' + LinkExPortal.global.Vars.courseID);
                Ext.create('Ext.container.Viewport', {
                    layout: 'border',
                    autoShow: 'true',
                    items: [{
                        region: 'center',
                        xtype: 'app-main'
                    }]
                });
            }
            else
            {
                alert('You didnt supply a course id');
                Ext.create('Ext.container.Viewport', {
                    layout: 'border',
                    autoShow: 'true',
                    items: [
                        {
                            region: 'center',
                            items: [
                                {
                                    xtype: 'label',
                                    text: '<p><b>YOU ARE GOING TO HAVE TO SELECT A COURSE!</b></p>'
                                }
                            ]
                        }
                    ]
                });
            }
        }
    }
});
