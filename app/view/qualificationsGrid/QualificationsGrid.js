Ext.define("LinkExPortal.view.qualificationsGrid.QualificationsGrid", {
    extend: "Ext.grid.Panel",
    requires: [
        "LinkExPortal.view.qualificationsGrid.QualificationsGridController",
        "LinkExPortal.view.qualificationsGrid.QualificationsGridModel"
    ],
    alias: 'widget.qualificationsgrid',
    controller: "qualificationsgrid-qualificationsgrid",
    viewModel: {
        type: "qualificationsgrid-qualificationsgrid"
    },
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 1
        })
    ],
    bind: {
        store: '{studentQualifications}'
    },
    columns: [{
        text     : 'Name',
        flex     : 1,
        sortable : true,
        dataIndex: 'Name',
        editor: {
            xtype: 'textfield',
            allowBlank: false
        }
    }, {
        text     : 'Comments',
        flex     : 1,
        sortable : true,
        dataIndex: 'Comments',
        editor: {
            xtype: 'textfield'
        }
    }, {
        xtype: 'datecolumn',
        header: 'Start Date',
        dataIndex: 'Date',
        width: 135,
        editor: {
            xtype: 'datefield',
            allowBlank: false,
            format: 'd/m/Y'
        }
    }, {
        xtype: 'datecolumn',
        header: 'Start Date',
        dataIndex: 'start',
        width: 135,
        editor: {
            xtype: 'datefield',
            allowBlank: false,
            format: 'd/m/Y'
        }
    },{
        text     : 'CPDHealthApplicationFormID',
        width    : 90,
        sortable : true,
        dataIndex: 'CPDHealthApplicationFormID'
    },{
        text     : 'StudentQualificationID',
        width    : 90,
        sortable : true,
        dataIndex: 'StudentQualificationID'
    }],
    tbar: [{
        text: 'Add Qualification',
        iconCls: 'employee-add',
        handler : function() {
            //rowEditing.cancelEdit();
            // Create a model instance
            //var r = Ext.create('StudentQualification', {
            //    Name: 'New Qual',
            //    Comments: 'new@sencha-test.com'
            //});
            //store.insert(0, r);
            //rowEditing.startEdit(0, 0);
            var myStore = this.up().up().getStore();
            if (myStore) {
                myStore.add({
                    Name: 'New Qualification',
                    Comments: 'No comments'
                });
            }
        }
    },{
        itemId: 'removeQualification',
        text: 'Remove Qualification',
        iconCls: 'employee-remove',
        /*handler: function() {
            var sm = grid.getSelectionModel();
            rowEditing.cancelEdit();
            store.remove(sm.getSelection());
            if (store.getCount() > 0) {
                sm.select(0);
            }
        },*/
        disabled: true
    }]//,
    //plugins: [rowEditing],
    //listeners: {
    //    'selectionchange': function(view, records) {
    //        grid.down('#removeEmployee').setDisabled(!records.length);
    //    }
    //}
});
