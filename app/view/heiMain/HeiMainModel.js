Ext.define('LinkExPortal.view.heiMain.HeiMainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.heimain-heimain',
    stores: {
        sponsorAcceptedApplications: {
            model: 'CPDHealthApplicationForm',
            storeId: 'submittedApplications',
            alias: 'submittedApplications',
            autoLoad: true
        }
    }
});
