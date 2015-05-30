Ext.define('LinkExPortal.view.applicationsList.ApplicationsListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.applicationslist-applicationslist',
    stores: {
       submittedApplications: {
           model: 'CPDHealthApplication',
           storeId: 'submittedApplications',
           alias: 'submittedApplications',
           autoLoad: true
       }
    }
});
