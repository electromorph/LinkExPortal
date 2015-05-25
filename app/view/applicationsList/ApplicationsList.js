Ext.define("LinkExPortal.view.applicationsList.ApplicationsList",{
    extend: "Ext.grid.Panel",
    requires: [
        'LinkExPortal.view.applicationsList.ApplicationsListController',
        'LinkExPortal.view.applicationsList.ApplicationsListModel'
    ],
    alias: 'widget.applicationsList',
    controller: "applicationslist-applicationslist",
    viewModel: {
        type: "applicationslist-applicationslist"
    },
    iconCls: 'icon-user',
    header: false,
    bind: {
        store: '{submittedApplications}'
    },
    columns: [
        {
            text     : 'Course Applied For',
            flex     : 1,
            sortable : true,
            dataIndex: 'CourseSessionText'
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
                handler: function(grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    alert('Examine this record (' + rec.get('CPDHealthApplicationFormID') + ')');
                }
            },{
                icon: 'app/images/add.png',
                tooltip: 'Create a new application using these details',
                handler: function(grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    var applicationId = rec.get('CPDHealthApplicationFormID');
                    Ext.Ajax.request({ url: 'https://localhost:44306/application/cloneapplication/' + applicationId,
                        method: 'POST',
                        //params: {param1:LinkExPortal.global.Vars.applicationID.value},
                        success: function(responseObject){
                            Ext.Msg.alert('successfully recreated application');
                            //var obj = Ext.decode(responseObject.responseText);
                        },
                        failure: function(responseObject){
                            alert('Failed to recreate application');
                            var obj = Ext.decode(responseObject.responseText);
                            Ext.Msg.alert('Status', obj);
                        }
                    });
                }
            }]
        }
    ]/*,
    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: 'Add',
            iconCls: 'icon-add',
            handler: function(){
                // empty record
                store.insert(0, new CPDHealthApplicationForm());
                rowEditing.startEdit(0, 0);
            }
        }, '-', {
            itemId: 'delete',
            text: 'Delete',
            iconCls: 'icon-delete',
            disabled: true,
            handler: function(){
                var selection = grid.getView().getSelectionModel().getSelection()[0];
                if (selection) {
                    store.remove(selection);
                }
            }
        }]
    }]*/
});
