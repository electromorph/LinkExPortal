Ext.define('LinkExPortal.model.ProfessionalBodiesList', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'ListItemId', type: 'int' },
        { name: 'Description', type: 'string' },
        { name: 'ListOrder', type: 'int' }

    ],
    schema: {
        id: 'professionalbodies',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            url: LinkExPortal.global.Vars.defaultUrl + '/application/Refs/professionalbodies',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});
