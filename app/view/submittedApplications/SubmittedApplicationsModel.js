Ext.define('LinkExPortal.view.submittedApplications.SubmittedApplicationsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.submittedapplications-submittedapplications',
    stores: {
        submittedApplications: {
            model: 'CPDHealthApplicationFormSponsor',
            storeId: 'submittedApplications',
            alias: 'submittedApplications',
            autoLoad: true,
            filters: [
                {
                    filterFn: function(item) {
                        return item.ApplicationStatusID != 19
                    }
                }
            ]
        }
    }
});
