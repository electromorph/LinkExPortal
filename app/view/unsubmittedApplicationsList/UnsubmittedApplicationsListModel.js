Ext.define('LinkExPortal.view.unsubmittedApplicationsList.UnsubmittedApplicationsListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.unsubmittedapplicationslist-unsubmittedapplicationslist',
    stores: {
        unsubmittedApplications : {
            model    : 'CPDHealthApplicationTemp',
            storeId  : 'unsubmittedApplications',
            alias    : 'unsubmittedApplications',
            autoLoad : true
        }
    }
});
