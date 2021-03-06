Ext.define('LinkExPortal.model.GendersList', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'ListItemId', type: 'int' },
        { name: 'Description', type: 'string' },
        { name: 'ListOrder', type: 'int' }
    ],
    schema: {
        id: 'genders',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            url: 'https://localhost:44306/application/Refs/genders',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});
