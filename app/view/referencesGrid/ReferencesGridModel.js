Ext.define('LinkExPortal.view.referencesGrid.ReferencesGridModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.referencesgrid-referencesgrid',
    data: {
        name: 'LinkExPortal'
    },
    stores: {
        studentReferences: {
            model: 'StudentReference',
            storeId: 'studentReferences',
            alias: 'studentReferences',
            autoLoad: true
        }
    }
});
