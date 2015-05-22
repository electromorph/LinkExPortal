Ext.define("LinkExPortal.view.applicationsRejected.ApplicationsRejected",{
    extend: "Ext.grid.Panel",
    requires: [
        'LinkExPortal.view.applicationsRejected.ApplicationsRejectedController',
        'LinkExPortal.view.applicationsRejected.ApplicationsRejectedModel',
        'LinkExPortal.view.applicationSummary.ApplicationSummary'
    ],
    alias: 'widget.applicationsrejected',
    controller: "applicationsrejected-applicationsrejected",
    viewModel: {
        type: "applicationsrejected-applicationsrejected"
    },
    frame: true,
    header: false,
    iconCls: 'icon-user',
    bubbleEvents: [
        'select'
    ],
    bind: {
        store: '{applicationsRejected}',
        selection: '{selectedCPDHealthApplicationForm}'
    },
    columns: [
        {
            text     : 'ID',
            flex     : 1,
            sortable : true,
            dataIndex: 'CPDHealthApplicationFormID'
        },{
            text     : 'First Name',
            flex     : 1,
            sortable : true,
            dataIndex: 'Firstname'
        },{
            text     : 'Last Name',
            flex     : 1,
            sortable : true,
            dataIndex: 'Lastname'
        },
        {
            text     : 'Status',
            flex     : 1,
            sortable : true,
            dataIndex: 'ApplicationStatus'
        },
        {
            xtype:'actioncolumn',
            width:75,
            items: [{
                icon: 'app/images/information.png',  // Use a URL in the icon config
                tooltip: 'Examine this application',
                handler: 'informationClicked'
            },{
                icon: 'app/images/user_red.png',
                tooltip: 'Reject this user',
                handler: 'rejectClicked'
            },{
                icon: 'app/images/user_green.png',
                tooltip: 'Accept this user',
                handler: 'acceptClicked'
            }]
        }
    ]
});
