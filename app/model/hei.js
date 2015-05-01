Ext.define('LinkExPortal.model.hei', {
    extend: 'Ext.data.Model',
    idProperty: 'HEIID',
    fields: [
        { name: 'HEIID', type: 'int' },
        { name: 'Name', type: 'string' }
    ],
    schema: {
        id: 'heis',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            //url: 'http://linkexwebapi.azurewebsites.net/application/Refs/genders',
            url: 'http://localhost:26214/api/HEIs',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});
