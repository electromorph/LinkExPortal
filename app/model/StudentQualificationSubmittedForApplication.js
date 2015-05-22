Ext.define('LinkExPortal.model.StudentQualificationSubmittedForApplication', {
    extend: 'Ext.data.Model',
    idField: 'StudentQualificationID',
    fields: [
        { name: 'Name', type: 'string' },
        { name: 'DateFrom', type: 'date', dateReadFormat: 'Y-m-dT00:00:00', dateWriteFormat: 'Y-m-d' },
        { name: 'DateTo', type: 'date', dateReadFormat: 'Y-m-dT00:00:00', dateWriteFormat: 'Y-m-d' },
        { name: 'Institution', type: 'string' },
        { name: 'Comments', type: 'string' },
        { name: 'StudentQualificationID', type: 'int' }
    ],
    schema: {
        id: 'studentQualifications',
        namespace: 'LinkExPortal.model',
        remoteFilter: true,
        proxy: {
            type: 'rest',
            //url: 'http://linkexwebapi.azurewebsites.net/api/CPDHealthApplicationFormTemps',
            url: 'https://localhost:44306/studentqualifications/submittedforapplication',
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
