Ext.define("LinkExPortal.view.references.References",{
    extend: "Ext.panel.Panel",
    requires: [
        'LinkExPortal.view.references.ReferencesController',
        'LinkExPortal.view.references.ReferencesModel',
        'LinkExPortal.view.referencesGrid.ReferencesGrid'
    ],
    alias: 'widget.references',
    controller: "references-references",
    viewModel: {
        type: "references-references"
    },
    items: [
        {
            xtype: 'referencesGrid'
        }
    ]
});
