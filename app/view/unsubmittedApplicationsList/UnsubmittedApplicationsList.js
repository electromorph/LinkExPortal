Ext.define("LinkExPortal.view.unsubmittedApplicationsList.UnsubmittedApplicationsList",{
    extend: "Ext.grid.Panel",
    requires: [
        'LinkExPortal.view.unsubmittedApplicationsList.UnsubmittedApplicationsListController',
        'LinkExPortal.view.unsubmittedApplicationsList.UnsubmittedApplicationsListModel'
    ],
    alias: 'widget.unsubmittedApplicationsList',
    controller: "unsubmittedapplicationslist-unsubmittedapplicationslist",
    viewModel: {
        type: "unsubmittedapplicationslist-unsubmittedapplicationslist"
    },
    //frame: true,
    scrollable: true,
    header: false,
    autoScroll: true,
    iconCls: 'icon-user',
    bind: {
        store: '{unsubmittedApplications}'
    },
    columns: [{
            text     : 'Course Applied For',
            flex     : 1,
            sortable : true,
            dataIndex: 'CourseSessionText'
        },{
            xtype:'actioncolumn',
            width:50,
            items: [{
                icon: 'app/images/user_edit.png',  // Use a URL in the icon config
                tooltip: 'Edit application',
                handler: 'editClicked'
            },{
                    icon: 'app/images/cross.gif',  // Use a URL in the icon config
                    tooltip: 'Delete Application',
                    handler: 'deleteClicked'
            }
        ]
    }]
});
