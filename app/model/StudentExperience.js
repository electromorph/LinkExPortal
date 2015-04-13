Ext.define('LinkExPortal.model.StudentExperience', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'StudentExperienceID', type: 'int' },
        { name: 'Description', type: 'string' },
        { name: 'Organization', type: 'string' },
        { name: 'FullTime', type: 'string' },
        { name: 'Grade', type: 'bool' },
        { name: 'DateFrom', type: 'date' },
        { name: 'DateTo', type: 'date' },
        { name: 'Comments', type: 'string' },
        { name: 'CPDHealthApplicationFormID', type: 'int' }

    ],
    schema: {
        id: 'studentexperience',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            url: 'http://linkexwebapi.azurewebsites.net/application/2/experience',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});
