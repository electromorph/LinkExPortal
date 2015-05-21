Ext.define("StudentDashboard.view.studentDashboard.StudentDashboard",{
    extend: "Ext.panel.Panel",
    controller: "studentdashboard-studentdashboard",
    viewModel: {
        type: "studentdashboard-studentdashboard"
    },
    items: [{
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'west',
        html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
        width: 250,
        split: true,
        tbar: [{
            text: 'Button',
            handler: 'onClickButton'
        }]
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[
            {
                title: 'Submitted Applications',
                items: [
                    {
                        xtype: 'applicationsList'
                    }
                ]
            },
            {
                title: 'Unsubmitted Applications',
                items: [
                    {
                        xtype: 'unsubmittedApplicationsList'
                    }
                ]
            },
            {
                title: 'Profile',
                items: [
                    {
                        xtype: 'userprofile'
                    }
                ]
            }
        ]
    }]
});
