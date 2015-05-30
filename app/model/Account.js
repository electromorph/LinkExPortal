Ext.define('LinkExPortal.model.Account', {
    extend: 'Ext.data.Model',
    idProperty: 'AccountID',
    fields: [
        { name: 'AccountID', type: 'int' },
        { name: 'UserID', type: 'string' },
        { name: 'FirstName', type: 'string' },
        { name: 'LastName', type: 'string' },
        { name: 'EmailAtFirstRegistration', type: 'string' },
        { name: 'EmailMeIfSponsor', type: 'bool' }
    ],
    schema: {
        id: 'account',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            url: 'https://localhost:44306/api/Accounts',
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
