Ext.define('LinkExPortal.view.applicationAcceptance.ApplicationAcceptanceModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.applicationacceptance-applicationacceptance',
    stores: {
        applicationstoupdate: {
            model: 'CPDHealthApplicationForm',
            storeId: 'applicationstoupdate',
            alias: 'applicationstoupdate',
            autoLoad: true
        }
    }
});
