var types = Ext.data.Types;
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
            url: 'http://localhost:26214/application/Refs/professionalbodies',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});
