Ext.define('LinkExPortal.model.StudentReferencesSubmittedForApplication', {
    extend: 'Ext.data.Model',
    idField: 'StudentReferenceID',
    fields: [
        { name: 'StudentReferenceID', type: 'int' },
        { name: 'FirstName', type: 'string' },
        { name: 'Surname', type: 'string' },
        { name: 'JobTitle', type: 'string' },
        { name: 'Organization', type: 'string' },
        { name: 'RelationshipToApplicant', type: 'string' },
        { name: 'CPDHealthApplicationFormID', type: 'int' },
        { name: 'Address', type: 'string' },
        { name: 'Telephone', type: 'string' },
        { name: 'Fax', type: 'string' },
        { name: 'Email', type: 'string' },
        { name: 'TitleID', type: 'int' },
        { name: 'TitleText', type: 'string' }
    ],
    schema: {
        id: 'studentReferences',
        namespace: 'LinkExPortal.model',
        remoteFilter: true,
        proxy: {
            type: 'rest',
            //url: 'http://linkexwebapi.azurewebsites.net/api/CPDHealthApplicationFormTemps',
            url: 'https://localhost:44306/studentreferences/submittedforapplication/',
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
