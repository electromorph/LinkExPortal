Ext.define('LinkExPortal.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'LinkExPortal.view.main.MainController',
        'LinkExPortal.view.main.MainModel',
        'LinkExPortal.view.applicationForm.ApplicationForm'
    ],
    xtype: 'app-main',
    controller: 'main',
    viewModel: {
        type: 'main'
    },
    layout: {
        type: 'border'
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
                items:[{
                    xtype: 'applicationForm',
                    bind: { hidden: '{!showApplicationForm}' }
                },{
                    xtype: 'label',
                    text: 'Oops - you have arrived here by mistake.',
                    bind: { hidden: '{showApplicationForm}' }
                }
            ]
        }
    ]
});
