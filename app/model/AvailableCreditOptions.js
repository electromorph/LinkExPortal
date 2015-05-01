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
            //url: 'http://linkexwebapi.azurewebsites.net/application/Refs/genders',
            url: 'http://localhost:26214/application/Refs/availablecreditoptions',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});
