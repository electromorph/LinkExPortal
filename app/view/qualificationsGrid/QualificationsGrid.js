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
            clicksToEdit: 1,
            autoCancel: false
        })
    ],
    height: 400,
    bind: {
        store: '{studentQualifications}'
    },
    selModel: 'rowmodel',
        listeners: {
        /*'selectionchange': function(view, records) {
            grid.down('#removeEmployee').setDisabled(!records.length);
        }*/
    },
    columns: [{
        text     : 'StudentQualificationID',
        dataIndex: 'StudentQualificationID',
        hidden: true,
        editor: {
            xtype: 'textfield'
        }
    },{
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
        text     : 'Institution',
        flex     : 1,
        sortable : true,
        dataIndex: 'Institution',
        editor: {
            xtype: 'textfield'
        }
    }, {
        xtype: 'datecolumn',
        header: 'Date From',
        dataIndex: 'DateFrom',
        width: 135,
        dateformat: 'd/m/Y',//renderer:Ext.util.Format.dateRenderer('m-d-Y'),
        editor: {
            xtype: 'textfield',
            anchor: '100%',
            format: 'd/m/Y'
        }
    }, {
        xtype: 'datecolumn',
        header: 'Date To',
        dataIndex: 'DateTo',
        dateformat: 'd/m/Y',
        width: 135,
        editor: {
            xtype: 'textfield',
            anchor: '100%',
            format: 'd/m/Y'
        }
    }, {
        xtype:'actioncolumn',
        width:50,
        bubbleEvents: [ 'click' ],
        items: [{
            icon: 'app/images/cross.gif',  // Use a URL in the icon config
            tooltip: 'View details',
            handler: function(grid, rowIndex, colIndex) {
                var rec = grid.getStore().getAt(rowIndex);
                rec.erase();
            }
        }]
    }],
    tbar: [{
        text: 'Add Qualification',
        iconCls: 'employee-add',
        handler : function() {
            var myStore = this.up().up().getStore();
            myStore.proxy.url = LinkExPortal.global.Vars.defaultUrl + '/api/studentqualifications';
            var rec = Ext.create('LinkExPortal.model.StudentQualification', {
                    Name: '',
                    Comments: '',
                    DateFrom: new Date(),
                    DateTo: new Date(),
                    Institution: '',
                    CPDHealthApplicationFormID: LinkExPortal.global.Vars.applicationID.value});
            rec.save({
                failure: function(record, operation) {
                },
                success: function(record, operation) {
                    myStore.proxy.url = LinkExPortal.global.Vars.defaultUrl + '/studentqualifications/unsubmittedforapplication/' + LinkExPortal.global.Vars.applicationID.value;
                    myStore.load();
                },
                callback: function(record, operation, success) {
                    myStore.proxy.url = LinkExPortal.global.Vars.defaultUrl + '/api/studentqualifications';
                }
            });
        }
    },{
        itemId: 'removeQualification',
        text: 'Remove Qualification',
        iconCls: 'employee-remove',
        handler: function(grid) {
            //var sm = grid.getSelectionModel();
            //rowEditing.cancelEdit();
            //store.remove(sm.getSelection());
            //if (store.getCount() > 0) {
            //    sm.select(0);
            //}
        },
        disabled: true
    }]
});
