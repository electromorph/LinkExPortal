Ext.define('LinkExPortal.model.TitleList', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'ListItemId', type: 'int' },
        { name: 'Description', type: 'string' },
        { name: 'ListOrder', type: 'int' }
    ],
    schema: {
        id: 'titles',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            url: 'http://linkexwebapi.azurewebsites.net/application/Refs/titles',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});
