Ext.define('LinkExPortal.model.Course', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'CourseID', type: 'int' },
        { name: 'CourseCode', type: 'string' },
        { name: 'Description', type: 'string' },
        { name: 'AcademicYear', type: 'string' },
        { name: 'CourseTypeID', type: 'int' },
        { name: 'Fee', type: 'float' },
        { name: 'Credit', type: 'int' },
        { name: 'HEIID', type: 'int' }
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
