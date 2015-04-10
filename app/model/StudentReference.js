var types = Ext.data.Types;
Ext.define('LinkExPortal.model.StudentReference', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'StudentReferenceID', type: types.INT },
        { name: 'Firstname', type: types.STRING },
        { name: 'Surname', type: types.STRING },
        { name: 'JobTitle', type: types.STRING },
        { name: 'Organization', type: types.STRING },
        { name: 'RelationshipToApplicant', type: types.STRING },
        { name: 'Address', type: types.STRING },
        { name: 'Telephone', type: types.STRING },
        { name: 'Fax', type: types.STRING },
        { name: 'Email', type: types.STRING },
        { name: 'TitleID', type: types.INT },
        { name: 'CPDHealthApplicationFormID', type: types.INT }

    ],
    schema: {
        id: 'studentreference',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            url: 'http://localhost:26214/api/Courses',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});
