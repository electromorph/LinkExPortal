var types = Ext.data.Types;
Ext.define('LinkExPortal.model.StudentExperience', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'StudentExperienceID', type: types.INT },
        { name: 'Description', type: types.STRING },
        { name: 'Organization', type: types.STRING },
        { name: 'FullTime', type: types.STRING },
        { name: 'Grade', type: types.BOOL },
        { name: 'DateFrom', type: types.DATE },
        { name: 'DateTo', type: types.DATE },
        { name: 'Comments', type: types.STRING },
        { name: 'CPDHealthApplicationFormID', type: types.INT }

    ],
    schema: {
        id: 'studentexperience',
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
