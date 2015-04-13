
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
        store: '{studentExperience}'
    },
    columns: [{
        text     : 'Job Title',
        flex     : 1,
        sortable : false,
        dataIndex: 'Description'
    }, {
        text     : 'Organization',
        flex     : 1,
        sortable : true,
        formatter: 'usMoney',
        dataIndex: 'Organization'
    }, {
        text     : 'Full/Part time',
        width    : 75,
        sortable : true,
        renderer : 'usMoney',
        dataIndex: 'FullTime'
    }, {
        text     : 'From',
        width    : 90,
        sortable : true,
        dataIndex: 'DateFrom'
    },{
        text     : 'To',
        width    : 90,
        sortable : true,
        dataIndex: 'DateTo'
    },
    {
        text     : 'Grade',
        width    : 90,
        sortable : true,
        dataIndex: 'Grade'
    }
    ]
});
