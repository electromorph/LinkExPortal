Ext.define('LinkExPortal.view.sponsorMain.SponsorMain', {
    extend: 'Ext.container.Container',
    plugins: 'viewport',
    requires: [
        'LinkExPortal.view.sponsorMain.SponsorMainController',
        'LinkExPortal.view.sponsorMain.SponsorMainModel',
        'LinkExPortal.view.sponsorApplications.SponsorApplications'
    ],
    alias: 'widget.sponsormain',
    title: 'Sponsor Screen',
    controller: 'sponsormain-sponsormain',
    viewModel: {
        type: 'sponsormain-sponsormain'
    },
    routes: {
        '!:page': {
            action: 'onNavigate'
        }
    },
    layout: {
        type: 'border'
    },
    listeners: {
        select: 'onSelectApplication'
    },
    items: [{
        xtype: 'panel',
        title: 'Sponsor Portal',
        region: 'west',
        width: 125,
        layout: {
            type: 'vbox',
            align: 'stretchmax'
        },
        split: true,
        items: [{
            xtype: 'button',
            text: 'User Settings',
            handler: 'onClickProfile'
        }, {
            xtype: 'button',
            text: 'Application Forms',
            handler: 'onClickApplications'
        }, {
            xtype: 'button',
            text: 'Logout',
            handler: 'onClickLogout'
        }]
    },{
        region: 'center',
        layout: {
            type: 'fit'
        },
        split: true,
        xtype: 'panel',
        items:[{
            xtype: 'sponsorapplications'
        },{
            xtype: 'userprofile',
            hidden: true
        }]
    }]
});
