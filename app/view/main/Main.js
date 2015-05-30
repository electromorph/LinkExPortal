Ext.define('LinkExPortal.view.main.Main', {
    extend: 'Ext.container.Container',
    plugins: 'viewport',
    requires: [
        'LinkExPortal.view.main.MainController',
        'LinkExPortal.view.main.MainModel',
        'LinkExPortal.view.applicationForm.ApplicationForm',
        'LinkExPortal.view.commissionedCourses.CommissionedCourses',
        'LinkExPortal.view.searchCourses.SearchCourses',
        'LinkExPortal.view.fromTrust.FromTrust'
    ],
    xtype: 'app-main',
    controller: 'main',
    viewModel: {
        type: 'main'
    },
    layout: {
        type: 'border'
    },
    listeners : {
        rowclick: 'copyGlobalsToViewModel'
    },
    items: [{
        region: 'north',
        xtype: 'panel',
        layout: {
            type: 'hbox'
        },
        items: [
            {
                xtype: 'image',
                id: 'UniLogoImage',
                width: 318,
                height: 98
            },
            {
                xtype: 'button',
                text: 'Visit Portal',
                id: 'btnBackToPortal',
                handler: 'onClickBackToPortal'
            }
        ]
    },{
            region: 'center',
            xtype: 'panel',
            bubbleEvents: [ 'rowclick' ],
            items:[{
                    xtype: 'applicationForm'
                }
            ]
        }
    ]
});
