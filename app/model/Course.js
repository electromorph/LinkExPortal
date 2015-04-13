var types = Ext.data.Types;
Ext.define('LinkExPortal.model.Course', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'CourseID', type: types.INT },
        { name: 'CourseCode', type: types.STRING },
        { name: 'Description', type: types.STRING },
        { name: 'AcademicYear', type: types.STRING },
        { name: 'CourseTypeID', type: types.INT },
        { name: 'Fee', type: types.FLOAT },
        { name: 'Credit', type: types.INT },
        { name: 'HEIID', type: types.INT }
    ],
    schema: {
        id: 'courses',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            url: 'http://linkexwebapi.azurewebsites.net/api/Courses',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});
