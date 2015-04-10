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
            height: 100,
            listeners: [
                {
                    fireEvent: 'onClickPanelButton',
                    scope: 'controller'
                },
                {
                    boxready: 'onReady',
                    scope: 'controller'
                }
            ],
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
                    },
                    {
                    xtype: 'button',
                    text: 'Fire!',
                    handler: function(button) {
                        var grid = button.up().up();
                        grid.fireEvent('fireEvent',grid);
                    }
                }]
            }],
            items: [

            ]
        }*/,
        {
            xtype: 'panel',
            bind: {
                title: '{name}'
            },
            region: 'west',
            html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
            width: 250,
            split: true,
            tbar: [{
                text: 'Apply!',
                handler: 'onClickButton'
            }]
        },
        {
            region: 'center',
            xtype: 'tabpanel',
            items:[{
                title: 'Tab 1',
                items: [
                    {
                        xtype: 'applicationForm',
                        hidden: false
                    }
                ]
            }]
        }
    ]
});
