Ext.define('LinkExPortal.model.StudentExperience', {
    extend: 'Ext.data.Model',
    idProperty: 'StudentExperienceID',
    fields: [
        { name: 'StudentExperienceID', type: 'int' },
        { name: 'Description', type: 'string' },
        { name: 'Organization', type: 'string' },
        { name: 'FullTime', type: 'string' },
        { name: 'Grade', type: 'string' },
        { name: 'DateFrom', type: 'date', dateReadFormat: 'Y-m-dT00:00:00', dateWriteFormat: 'Y-m-d'  },
        { name: 'DateTo', type: 'date', dateReadFormat: 'Y-m-dT00:00:00', dateWriteFormat: 'Y-m-d'  },
        { name: 'Comments', type: 'string' },
        { name: 'CPDHealthApplicationFormID', type: 'int' }
    ],
    schema: {
        id: 'studentexperience',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            url: LinkExPortal.global.Vars.defaultUrl + '/api/studentexperiences',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            writer: {
                type: 'json',
                writeAllFields: true
            },
            noCache: false
        }
    }
});
