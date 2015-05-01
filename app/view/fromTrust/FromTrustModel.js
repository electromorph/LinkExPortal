Ext.define('LinkExPortal.view.fromTrust.FromTrustModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.fromtrust-fromtrust',
    stores: {
        sponsorList: {
            model: 'sponsor',
            storeId: 'sponsorList',
            alias: 'sponsorList',
            autoLoad: true,
            sorters: [{
                property: 'Description',
                direction: 'DESC'
            }]
        }
    }
});
