Ext.define('LinkExPortal.view.studentMain.StudentMain', {
    extend: 'Ext.container.Container',
    plugins: 'viewport',
    requires: [
        'LinkExPortal.view.studentMain.StudentMainController',
        'LinkExPortal.view.studentMain.StudentMainModel',
        'LinkExPortal.view.applicationsList.ApplicationsList',
        'LinkExPortal.view.unsubmittedApplicationsList.UnsubmittedApplicationsList',
        'LinkExPortal.view.userProfile.UserProfile'
    ],
    alias: 'widget.studentmain',
    controller: 'studentmain-studentmain',
    viewModel: {
        type: 'studentmain-studentmain'
    },
    layout: {
        type: 'border'
    },
    items: [{
        xtype: 'panel',
        title: 'Student Portal',
        region: 'west',
        html: '',
        width: 250,
        split: true,
        tbar: [{
            text: 'Logout',
            handler: 'onClickButton'
        }]
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Submitted Applications',
            layout: {
                type: 'fit'
            },
            items: [{
                xtype: 'applicationsList'
            }]
        },{
            title: 'Unsubmitted Applications',
            layout: {
                type: 'fit'
            },
            items: [{
                xtype: 'unsubmittedApplicationsList'
            }]
        },
        {
            title: 'Profile',
            items: [
                {
                    xtype: 'userprofile'
                }
            ]
        }]
    }]
});
