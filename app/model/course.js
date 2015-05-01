Ext.define('LinkExPortal.model.course', {
    extend: 'Ext.data.Model',
    idProperty: 'CourseID',
    fields: [
        { name: 'CourseID', type: 'int' },
        { name: 'CourseCode', type: 'string' },
        { name: 'Description', type: 'string' },
        { name: 'AcademicYear', type: 'int' },
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
            //url: 'http://linkexwebapi.azurewebsites.net/application/Refs/genders',
            url: 'http://localhost:26214/api/Courses',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});
