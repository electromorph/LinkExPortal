Ext.define('LinkExPortal.model.UserProfileInfo', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'Email', type: 'string' },
        { name: 'PhoneNumber', type: 'string' },
        { name: 'UserName', type: 'string' },
        { name: 'FirstName', type: 'string' },
        { name: 'LastName', type: 'string' }
    ],
    schema: {
        id: 'userprofileinfo',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            url: 'https://localhost:44306/api/UserProfileInfo',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});
