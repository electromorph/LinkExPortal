Ext.define("LinkExPortal.view.submittedApplications.SubmittedApplications",{
    extend: "Ext.grid.Panel",
    requires: [
        'LinkExPortal.view.submittedApplications.SubmittedApplicationsController',
        'LinkExPortal.view.submittedApplications.SubmittedApplicationsModel',
        'LinkExPortal.view.applicationAcceptance.ApplicationAcceptance'
    ],
    alias: 'widget.submittedapplications',
    controller: "submittedapplications-submittedapplications",
    viewModel: {
        type: "submittedapplications-submittedapplications"
    },
    frame: true,
    header: false,
    iconCls: 'icon-user',
    bubbleEvents: [
        'select'
    ],
    bind: {
        store: '{submittedApplications}',
        selection: '{selectedCPDHealthApplicationForm}'
    },
    tbar: {
        items: [{
                xtype: 'button',
                text: 'Decline',
                listeners: {
                    click: 'declineClicked'
                }
            },{
                xtype: 'button',
                text: 'Approve',
                listeners: {
                    click: 'acceptClicked'
                }
            },{
                xtype: 'button',
                text: 'Back',
                formBind: true,
                listeners: {
                    click: 'cancelClicked'
                }
            }
        ]
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
        },{
            text     : 'Status',
            flex     : 1,
            sortable : true,
            dataIndex: 'ApplicationStatusText'
        },{
            xtype:'actioncolumn',
            width:50,
            items: [{
                icon: 'app/images/information.png',  // Use a URL in the icon config
                tooltip: 'View application',
                handler: 'acceptClicked'
            }]
        }
    ]
});
