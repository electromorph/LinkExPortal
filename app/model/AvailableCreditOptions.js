Ext.define('LinkExPortal.model.AvailableCreditOptions', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'credit', type: 'int' }

    ],
    schema: {
        id: 'creditoptions',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            url: 'https://localhost:44306/application/Refs/availablecreditoptions',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});
