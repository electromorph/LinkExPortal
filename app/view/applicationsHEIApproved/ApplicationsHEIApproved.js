Ext.define("LinkExPortal.view.applicationsHEIApproved.ApplicationsHEIApproved",{
    extend: "Ext.grid.Panel",
    requires: [
        'LinkExPortal.view.applicationsHEIApproved.ApplicationsHEIApprovedController',
        'LinkExPortal.view.applicationsHEIApproved.ApplicationsHEIApprovedModel'
    ],
    alias: 'widget.applicationsheiapproved',
    controller: "applicationsheiapproved-applicationsheiapproved",
    viewModel: {
        type: "applicationsheiapproved-applicationsheiapproved"
    },
    frame: true,
    header: false,
    iconCls: 'icon-user',
    bubbleEvents: [
        'select'
    ],
    bind: {
        store: '{applicationsHEIApproved}',
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
        },{
            text     : 'Status',
            flex     : 1,
            sortable : true,
            dataIndex: 'ApplicationStatus'
        },{
            xtype:'actioncolumn',
            width:50,
            items: [{
                icon: 'app/images/information.png',  // Use a URL in the icon config
                tooltip: 'View application',
                handler: function(grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    alert("Edit " + rec.get('Firstname'));
            }
        },{
                icon: 'app/images/add.png',
                tooltip: 'Create a new application using these details',
                handler: function(grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    alert("Terminate " + rec.get('Lastname'));
                }
            }]
        }
    ]
});
