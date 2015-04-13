
Ext.define("LinkExPortal.view.experienceGrid.ExperienceGrid",{
    extend: "Ext.panel.Panel",
    controller: "experiencegrid-experiencegrid",
    viewModel: {
        type: "experiencegrid-experiencegrid"
    },
    alias: 'widget.experienceGrid',
    bind: {
        store: '{studentExperience}'
    },
    columns: [{
        text     : 'Job Title',
        flex     : 1,
        sortable : true,
        dataIndex: 'Description'
    }, {
        text     : 'Organization',
        flex     : 1,
        sortable : true,
        dataIndex: 'Organization'
    }, {
        text     : 'Full/Part time',
        width    : 75,
        sortable : true,
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
