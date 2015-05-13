Ext.define('LinkExPortal.model.sponsor', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'SponsorID', type: 'auto' },
        { name: 'Description', type: 'auto' },
        { name: 'LETBID', type: 'auto' },
        { name: 'HeaderLogo', type: 'auto' }
    ],
    schema: {
        id: 'sponsorsschema',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            url: 'https://localhost:44306/api/Sponsors',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});
