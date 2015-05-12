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
            url: LinkExPortal.global.Vars.defaultUrl + '/api/Sponsors',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});
