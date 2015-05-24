Ext.define("LinkExPortal.view.heiMain.HeiMain",{
    extend: 'Ext.container.Container',
    plugins: 'viewport',
    requires: [
        'LinkExPortal.view.heiMain.HeiMainController',
        'LinkExPortal.view.heiMain.HeiMainModel'
    ],
    alias: 'widget.heimain',
    controller: "heimain-heimain",
    viewModel: {
        type: "heimain-heimain"
    },
    layout: {
        type: 'border'
    },
    items: [{
        xtype: 'panel',
        title: 'HEI Portal',
        region: 'center',
        tbar: [{
            text: 'Logout',
            handler: 'onClickLogout'
        },{
            text: 'Download As File',
            handler: 'onClickDownload'
        },{
            text: 'Email me the file',
            handler: 'onClickEmail'
            //Confirm email address to send to (Yes/No)
            //Make AJAX call
            //Confirm success/failure.
        }],
        items: [
            {
                xtype: 'gridpanel',
                bind: {
                    store: '{sponsorAcceptedApplications}'//,
                    //selection: '{selectedCPDHealthApplicationForm}'
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
            }
        ]
    }]
});
