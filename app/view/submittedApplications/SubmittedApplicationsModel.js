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
                    property: 'ApplicationStatusID',
                    value   : 19
                }
            ]
        }
    }
});
