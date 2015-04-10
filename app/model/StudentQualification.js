var types = Ext.data.Types;
Ext.define('LinkExPortal.model.StudentQualification', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'StudentQualificationID', type: types.INT },
        { name: 'Name', type: types.STRING },
        { name: 'Comments', type: types.STRING },
        { name: 'DateFrom', type: types.DATE },
        { name: 'DateTo', type: types.DATE },
        { name: 'CPDHealthApplicationFormID', type: types.INT }

    ],
    schema: {
        id: 'studentqualification',
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
