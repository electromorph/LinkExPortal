Ext.define('LinkExPortal.model.coursesession', {
    extend: 'Ext.data.Model',
    idProperty: 'CourseSessionID',
    fields: [
        { name: 'CourseSessionID', type: 'int' },
        { name: 'Description', type: 'string' },
        { name: 'StartDate', type: 'date' },
        { name: 'Status', type: 'string' },
        { name: 'CourseID', type: 'int' }
    ],
    schema: {
        id: 'coursesessions',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            //url: 'http://linkexwebapi.azurewebsites.net/application/Refs/genders',
            url: 'http://localhost:26214/application/Refs/CourseSessions',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});
