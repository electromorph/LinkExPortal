Ext.define('LinkExPortal.model.FTPTList', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'ListItemID', type: 'auto' },
        { name: 'Description', type: 'auto' },
        { name: 'ListOrder', type: 'auto' }
    ],
    schema: {
        id: 'ftptschema',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            url: 'https://localhost:44306/application/Refs/ftpt',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});
