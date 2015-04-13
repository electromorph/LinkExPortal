Ext.define('LinkExPortal.model.StudentQualification', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'StudentQualificationID', type: 'int' },
        { name: 'Name', type: 'string' },
        { name: 'Comments', type: 'string' },
        { name: 'DateFrom', type: 'date' },
        { name: 'DateTo', type: 'date' },
        { name: 'CPDHealthApplicationFormID', type: 'int' }

    ],
    schema: {
        id: 'studentqualification',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            url: 'http://linkexwebapi.azurewebsites.net/application/2/qualifications',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});
