Ext.define("LinkExPortal.view.qualificationsGrid.QualificationsGrid",{
    extend: "Ext.grid.Panel",
    requires: [
        "LinkExPortal.view.qualificationsGrid.QualificationsGridController",
        "LinkExPortal.view.qualificationsGrid.QualificationsGridModel"
    ],
    alias: 'widget.qualificationsGrid',
    controller: "qualificationsgrid-qualificationsgrid",
    viewModel: {
        type: "qualificationsgrid-qualificationsgrid"
    },
    bind: {
        store: '{studentQualifications}'
    },
    columns: [{
        text     : 'Name',
        flex     : 1,
        sortable : true,
        dataIndex: 'Name'
    }, {
        text     : 'Comments',
        flex     : 1,
        sortable : true,
        dataIndex: 'Comments'
    }, {
        text     : 'DateFrom',
        width    : 75,
        sortable : true,
        dataIndex: 'DateFrom'
    }, {
        text     : 'DateTo',
        width    : 90,
        sortable : true,
        dataIndex: 'DateTo'
    },{
        text     : 'CPDHealthApplicationFormID',
        width    : 90,
        sortable : true,
        dataIndex: 'CPDHealthApplicationFormID'
    },
    {
        text     : 'StudentQualificationID',
        width    : 90,
        sortable : true,
        dataIndex: 'StudentQualificationID'
    }
    ]
});
