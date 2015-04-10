var types = Ext.data.Types;
Ext.define('LinkExPortal.model.CountryList', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'ListItemId', type: 'int' },
        { name: 'Description', type: 'string' },
        { name: 'ListOrder', type: 'int' }
    ],
    schema: {
        id: 'countries',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            url: 'http://localhost:26214/application/Refs/countries',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});
