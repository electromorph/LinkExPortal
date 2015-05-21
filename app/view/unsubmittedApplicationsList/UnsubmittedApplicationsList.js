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
    frame: true,
    scrollable: true,
    header: false,
    autoScroll: true,
    iconCls: 'icon-user',
    bind: {
        store: '{unsubmittedApplications}'
    },
    columns: [
        {
            text     : 'Course Applied For',
            flex     : 1,
            sortable : true,
            dataIndex: 'CourseSessionText'
        }
    ]
});