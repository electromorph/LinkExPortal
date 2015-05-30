Ext.define("LinkExPortal.view.referencesGrid.ReferencesGrid",{
    extend: "Ext.grid.Panel",
    requires: [
        'LinkExPortal.view.referencesGrid.ReferencesGridController',
        'LinkExPortal.view.referencesGrid.ReferencesGridModel'
    ],
    alias: 'widget.referencesgrid',
    controller: "referencesgrid-referencesgrid",
    viewModel: {
        type: "referencesgrid-referencesgrid"
    },
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 1,
            autoCancel: false
        })
    ],
    selModel: 'rowmodel',
    bind: {
        store: '{studentReferences}'
    },
    columns: [{
        text     : 'StudentReferenceID',
        flex     : 1,
        sortable : true,
        hidden: true,
        dataIndex: 'StudentReferenceID'
    },{
        text     : 'Firstname',
        flex     : 1,
        sortable : true,
        dataIndex: 'FirstName',
        editor: {
            xtype: 'textfield'
        }
    },{
        text     : 'Surname',
        flex     : 1,
        sortable : true,
        dataIndex: 'Surname',
        editor: {
            xtype: 'textfield'
        }
    },{
        text     : 'JobTitle',
        width    : 75,
        sortable : true,
        dataIndex: 'JobTitle',
        editor: {
            xtype: 'textfield'
        }
    },{
        text     : 'Organization',
        width    : 90,
        sortable : true,
        dataIndex: 'Organization',
        editor: {
            xtype: 'textfield'
        }
    },{
        text     : 'RelationshipToApplicant',
        width    : 90,
        sortable : true,
        dataIndex: 'RelationshipToApplicant',
        editor: {
            xtype: 'textfield'
        }
    },{
        text     : 'Address',
        width    : 90,
        sortable : true,
        dataIndex: 'Address',
        editor: {
            xtype: 'textfield'
        }
    },{
        text     : 'Telephone',
        width    : 90,
        sortable : true,
        dataIndex: 'Telephone',
            editor: {
                xtype: 'textfield'
            }
    },{
        text     : 'Fax',
        width    : 90,
        sortable : true,
        dataIndex: 'Fax',
            editor: {
                xtype: 'textfield'
            }
    },{
        text     : 'Email',
        width    : 90,
        sortable : true,
        dataIndex: 'Email',
            editor: {
                xtype: 'textfield'
            }
    },{
        text     : 'TitleID',
        width    : 90,
        sortable : true,
        dataIndex: 'TitleID',
            editor: {
                xtype: 'combobox',
                id: 'fldTitleIDExperienceForm',
                queryMode: 'local',
                flex: 1,
                forceSelection: true,
                displayField: 'Description',
                valueField: 'ListItemID',
                name: 'Title',
                bind: {
                    store: '{titleList}',
                    value: '{currentRecord.TitleID}'
                }
            }
    },{
            xtype:'actioncolumn',
            width:50,
            bubbleEvents: [ 'click' ],
            items: [{
                icon: 'app/images/cross.gif',  // Use a URL in the icon config
                tooltip: 'View details',
                handler: function(grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    alert("Edit " + rec.get('CourseName'));
                }
            }]
        }],
    tbar: [{
        text: 'Add Reference',
        iconCls: 'employee-add',
        handler : function() {
            var myStore = this.up().up().getStore();
            myStore.proxy.url = LinkExPortal.global.Vars.defaultUrl + '/api/studentreferences';
            var rec = Ext.create('LinkExPortal.model.StudentReference', {
                FirstName: '',
                Surname: '',
                JobTitle: '',
                Organization: '',
                RelationshipToApplicant: '',
                Address: '',
                Telephone: '',
                Fax: '',
                Email: '',
                TitleID: '',
                CPDHealthApplicationFormID: LinkExPortal.global.Vars.applicationID.value});
            rec.save({
                failure: function(record, operation) {
                },
                success: function(record, operation) {
                    myStore.proxy.url = LinkExPortal.global.Vars.defaultUrl + '/studentreferences/unsubmittedforapplication/' + LinkExPortal.global.Vars.applicationID.value;
                    myStore.load();
                },
                callback: function(record, operation, success) {
                    myStore.proxy.url = LinkExPortal.global.Vars.defaultUrl + '/api/studentreferences';
                }
            });
        }
    }]
});
