Ext.define('LinkExPortal.view.main.Main', {
    extend: 'Ext.container.Container',
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
    items: [
        /*{
            itemId: 'panelToolBar',
            region: 'north',
            xtype: 'panel',
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [
                    {
                        xtype:'image',
                        id: 'linkEXLogo',
                        src: '/LinkExPortal/LinkEX.png',
                        width: 103,
                        height: 81
                    }
                ]
            }],
            items: [

            ]
        },*/{
            region: 'center',
            xtype: 'panel',
            bubbleEvents: [ 'rowclick' ],
            items:[{
                    xtype: 'applicationForm',
                    bind: { hidden: '{!showApplicationForm}' }
                },{
                    xtype: 'label',
                    text: 'Thank you!  Your application has been successfully registered, and is now under consideration.',
                    bind: { hidden: '{!applicationFormSubmitted}' }
                },{
                    xtype: 'tabpanel',
                    bind: {
                        hidden: '{showApplicationForm}'
                    },
                    items: [{
                        title: 'Select Trust',
                        defaults: {
                            // applied to each contained panel
                            bodyStyle: 'padding:15px',
                            autoScroll: true
                        },
                        items: [{
                                title: 'Select Trust',
                                items: [{
                                    xtype: 'fromtrust',
                                    listeners: {
                                        select: 'copyGlobalsToViewModel',
                                        change: 'copyGlobalsToViewModel'
                                    },
                                    bind: { hidden: '{!showTrustScreen}' }
                                },{
                                    xtype: 'commissionedcourses',
                                    listeners: {
                                        click: 'copyGlobalsToViewModel'
                                    },
                                    bind: { hidden: '{!showCommissionedCoursesScreen}'}
                                }]
                            }
                        ]},{
                            title: 'Choose courses',
                            bind: {
                                hidden: '{!showSearchScreen}'
                            },
                            items: [
                                {
                                    xtype: 'searchcourses',
                                    bubbleEvents: ['rowclick']
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});
