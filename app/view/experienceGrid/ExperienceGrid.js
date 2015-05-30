Ext.define("LinkExPortal.view.experienceGrid.ExperienceGrid",{
    extend: "Ext.grid.Panel",
    requires: [
        'LinkExPortal.view.experienceGrid.ExperienceGridController',
        'LinkExPortal.view.experienceGrid.ExperienceGridModel'
    ],
    alias: 'widget.experiencegrid',
    controller: "experiencegrid-experiencegrid",
    viewModel: {
        type: "experiencegrid-experiencegrid"
    },
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 1,
            autoCancel: false
        })
    ],
    bind: {
        store: '{studentExperience}'
    },
    selModel: 'rowmodel',
    listeners: {
        /*'selectionchange': function(view, records) {
         grid.down('#removeEmployee').setDisabled(!records.length);
         }*/
    },
    columns: [{
        text     : 'Description',
        dataIndex: 'Description',
        editor: {
            xtype: 'textfield'
        }
    },{
        text     : 'Organization',
        flex     : 1,
        sortable : true,
        dataIndex: 'Organization',
        editor: {
            xtype: 'textfield'
        }
    }, {
        text     : 'FT/PT',
        width    : 75,
        sortable : true,
        dataIndex: 'FullTime',
        editor: {
            xtype: 'combobox',
            id: 'searchFTPTexpgrid',
            queryMode: 'local',
            editable: false,
            forceSelection: true,
            displayField: 'text',
            valueField: 'value',
            name: 'FTPT',
            bind: {
                store: {
                    fields: ['text', 'value'],
                    data: [{text: 'fulltime', value: 'true'},
                        {text: 'parttime', value: 'false'}]
                },
                value: '{currentRecord.FTPT}'
            }
        }
    },{
        text: 'Grade',
        flex: 1,
        dataIndex: 'Grade',
        editor: {
            xtype: 'textfield'
        }
    }, {
        text     : 'From',
        width    : 90,
        sortable : true,
        dataIndex: 'DateFrom',
        editor: {
            xtype: 'datefield'
        }
    },{
        text     : 'To',
        width    : 90,
        sortable : true,
        dataIndex: 'DateTo',
        editor: {
            xtype: 'datefield'
        }
    },{
        text     : 'Comments',
        dataIndex: 'Comments',
        editor: {
            xtype: 'textfield'
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
                alert("Edit " + rec.get('StudentExperienceID'));
            }
        }]
    }],
    tbar: [{
        text: 'Add Experience',
        iconCls: 'employee-add',
        handler : function() {
            var myStore = this.up().up().getStore();
            myStore.proxy.url = LinkExPortal.global.Vars.defaultUrl + '/api/studentexperiences';
            var rec = Ext.create('LinkExPortal.model.StudentExperience', {
                Description: '',
                Organization: '',
                FullTime: true,
                Grade: '',
                DateFrom: new Date(),
                DateTo: new Date(),
                Comments: '',
                CPDHealthApplicationFormID: LinkExPortal.global.Vars.applicationID.value});
            rec.save({
                failure: function(record, operation) {
                    // do something if the save failed
                },
                success: function(record, operation) {
                    myStore.proxy.url = LinkExPortal.global.Vars.defaultUrl + '/studentexperiences/unsubmittedforapplication/' + LinkExPortal.global.Vars.applicationID.value;
                    myStore.load();
                },
                callback: function(record, operation, success) {
                    myStore.proxy.url = LinkExPortal.global.Vars.defaultUrl + '/api/studentexperiences';
                }
            });
        }
    }]
});
