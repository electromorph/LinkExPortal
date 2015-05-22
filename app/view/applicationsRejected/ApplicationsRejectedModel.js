Ext.define('LinkExPortal.view.applicationsRejected.ApplicationsRejectedModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.applicationsrejected-applicationsrejected',
    stores: {
        applicationsRejected: {
            model: 'CPDHealthApplicationFormSponsor',
            storeId: 'applicationsRejected',
            alias: 'applicationsRejected',
            autoLoad: true,
            filters: [
                {
                    property: 'ApplicationStatusID',
                    value   : 20
                }
            ]
        }
    }
});
