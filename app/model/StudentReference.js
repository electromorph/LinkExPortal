Ext.define('LinkExPortal.model.StudentReference', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'StudentReferenceID', type: 'int' },
        { name: 'Firstname', type: 'string' },
        { name: 'Surname', type: 'string' },
        { name: 'JobTitle', type: 'string' },
        { name: 'Organization', type: 'string' },
        { name: 'RelationshipToApplicant', type: 'string' },
        { name: 'Address', type: 'string' },
        { name: 'Telephone', type: 'string'},
        { name: 'Fax', type: 'string' },
        { name: 'Email', type: 'string' },
        { name: 'TitleID', type: 'int' },
        { name: 'CPDHealthApplicationFormID', type: 'int' }

    ],
    schema: {
        id: 'studentreference',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            url: 'http://linkexwebapi.azurewebsites.net/api/Courses',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});
