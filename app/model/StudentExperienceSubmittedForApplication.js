Ext.define('LinkExPortal.model.StudentExperienceSubmittedForApplication', {
    idField: 'StudentExperienceID',
    extend: 'Ext.data.Model',
    fields: [
        { name: 'Description', type: 'string' },
        { name: 'Comments', type: 'string' },
        { name: 'DateFrom', type: 'date', dateReadFormat: 'Y-m-dT00:00:00', dateWriteFormat: 'Y-m-d' },
        { name: 'DateTo', type: 'date', dateReadFormat: 'Y-m-dT00:00:00', dateWriteFormat: 'Y-m-d'  },
        { name: 'StudentExperienceID', type: 'int' },
        { name: 'FullTime', type: 'bool' },
        { name: 'Grade', type: 'string' },
        { name: 'Organization', type: 'string' },
        { name: 'CPDHealthApplicationID', type: 'string' }
    ],
    schema: {
        id: 'studentExperience',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            //url: 'http://linkexwebapi.azurewebsites.net/api/CPDHealthApplicationFormTemps',
            appendId: true,
            url: 'https://localhost:44306/studentexperiences/submittedforapplication',
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
