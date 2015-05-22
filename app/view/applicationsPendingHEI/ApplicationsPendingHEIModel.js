Ext.define('LinkExPortal.view.applicationsPendingHEI.ApplicationsPendingHEIModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.applicationspendinghei-applicationspendinghei',
    stores: {
        applicationsPendingHEI: {
            model: 'CPDHealthApplicationFormSponsor',
            storeId: 'applicationsPendingHEI',
            alias: 'applicationsPendingHEI',
            autoLoad: true,
            filters: [
                {
                    property: 'ApplicationStatusID',
                    value   : 21
                }
            ]
        }
    }
});
