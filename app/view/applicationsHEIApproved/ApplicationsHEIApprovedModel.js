Ext.define('LinkExPortal.view.applicationsHEIApproved.ApplicationsHEIApprovedModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.applicationsheiapproved-applicationsheiapproved',
    stores: {
        applicationsHEIApproved: {
            model: 'CPDHealthApplicationFormSponsor',
            storeId: 'applicationsHEIApproved',
            alias: 'applicationsHEIApproved',
            autoLoad: true,
            filters: [
                {
                    property: 'ApplicationStatusID',
                    value   : 23
                }
            ]
        }
    }
});
