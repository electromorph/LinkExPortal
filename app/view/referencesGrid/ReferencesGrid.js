Ext.define("LinkExPortal.view.referencesGrid.ReferencesGrid",{
    extend: "Ext.grid.Panel",
    requires: [
        'LinkExPortal.view.referencesGrid.ReferencesGridController',
        'LinkExPortal.view.referencesGrid.ReferencesGridModel'
    ],
    alias: 'widget.referencesGrid',
    controller: "referencesgrid-referencesgrid",
    viewModel: {
        type: "referencesgrid-referencesgrid"
    },
    bind: {
        store: '{studentReferences}'
    },
    columns: [{
        text     : 'Firstname',
        flex     : 1,
        sortable : true,
        dataIndex: 'Firstname'
    }, {
        text     : 'Surname',
        flex     : 1,
        sortable : true,
        dataIndex: 'Surname'
    }, {
        text     : 'JobTitle',
        width    : 75,
        sortable : true,
        dataIndex: 'JobTitle'
    }, {
        text     : 'Organization',
        width    : 90,
        sortable : true,
        dataIndex: 'Organization'
    },{
        text     : 'RelationshipToApplicant',
        width    : 90,
        sortable : true,
        dataIndex: 'RelationshipToApplicant'
    },
    {
        text     : 'Address',
        width    : 90,
        sortable : true,
        dataIndex: 'Address'
    },{
        text     : 'RelationshipToApplicant',
        width    : 90,
        sortable : true,
        dataIndex: 'RelationshipToApplicant'
    },{
        text     : 'Telephone',
        width    : 90,
        sortable : true,
        dataIndex: 'Telephone'
    },{
        text     : 'Fax',
        width    : 90,
        sortable : true,
        dataIndex: 'Fax'
    },{
        text     : 'Email',
        width    : 90,
        sortable : true,
        dataIndex: 'Email'
    },{
        text     : 'TitleID',
        width    : 90,
        sortable : true,
        dataIndex: 'TitleID'
    }
    ]
});
