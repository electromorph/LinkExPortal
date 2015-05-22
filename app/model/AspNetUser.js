Ext.define('LinkExPortal.model.AspNetUser', {
    extend: 'Ext.data.Model',
    idProperty: 'AspNetUserId',
    fields: [
        { name: 'AspNetUserId', type: 'string', mapping: 'Id' },
        { name: 'UserName', type: 'string' },
        { name: 'PhoneNumber', type: 'string' },
        { name: 'Email', type: 'string' }
    ],
    schema: {
        id: 'aspnetuser',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            url: 'https://localhost:44306/api/AspNetUsers',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false,
            writer: {
                type: "json",
                writeAllFields: true
            }
        }
    }
});
