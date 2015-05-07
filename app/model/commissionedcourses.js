Ext.define('LinkExPortal.model.commissionedcourses', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'SponsorID', type: 'int' },
        { name: 'SponsorName', type: 'string' },
        { name: 'CourseID', type: 'int' },
        { name: 'CourseName', type: 'string' },
        { name: 'CourseCode', type: 'string' },
        { name: 'AcademicYear', type: 'int' },
        { name: 'CourseTypeID', type: 'auto' },
        { name: 'CourseType', type: 'auto' },
        { name: 'Fee', type: 'auto' },
        { name: 'Credit', type: 'auto' },
        { name: 'HEIName', type: 'auto' },
        { name: 'HEIID', type: 'auto' },
        { name: 'AcademicYearName', type: 'int' }
    ],
    schema: {
        id: 'commissionedcourses',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            //url: 'http://linkexwebapi.azurewebsites.net/application/Refs/genders',
            url: 'http://localhost:26214/application/courses/commissioned',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});
