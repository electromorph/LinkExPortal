Ext.define('LinkExPortal.model.StudentQualification', {
    extend: 'Ext.data.Model',
    idProperty: 'StudentQualificationID',
    fields: [
        { name: 'StudentQualificationID', type: 'int' },
        { name: 'Name', type: 'string' },
        { name: 'Comments', type: 'string' },
        { name: 'DateFrom', type: 'date', dateReadFormat: 'Y-m-dT00:00:00', dateWriteFormat: 'Y-m-d' },
        { name: 'DateTo', type: 'date', dateReadFormat: 'Y-m-dT00:00:00', dateWriteFormat: 'Y-m-d' },
        { name: 'Institution', type: 'string'},
        { name: 'CPDHealthApplicationFormID', type: 'int' }
    ],
    schema: {
        id: 'studentqualification',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            //url: 'http://linkexwebapi.azurewebsites.net/application/2/qualifications',
            url: 'http://localhost:26214/api/studentqualifications',
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
