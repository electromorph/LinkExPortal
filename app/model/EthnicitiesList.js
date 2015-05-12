Ext.define('LinkExPortal.model.EthnicitiesList', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'ListItemId', type: 'int' },
        { name: 'Description', type: 'string' },
        { name: 'ListOrder', type: 'int' }
    ],
    schema: {
        id: 'ethnicities',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            url: LinkExPortal.global.Vars.defaultUrl + '/application/Refs/ethnicities',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});
