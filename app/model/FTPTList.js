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
            //url: 'http://linkexwebapi.azurewebsites.net/application/Refs/genders',
            url: 'http://localhost:26214/application/Refs/ftpt',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});
