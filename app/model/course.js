Ext.define('LinkExPortal.model.course', {
    extend: 'Ext.data.Model',
    idProperty: 'CourseID',
    fields: [
        { name: 'CourseID', type: 'int' },
        { name: 'CourseCode', type: 'string' },
        { name: 'CourseName', type: 'string' },
        { name: 'AcademicYearID', type: 'int' },
        { name: 'AcademicYear', type: 'string' },
        { name: 'CourseTypeID', type: 'string' },
        { name: 'Fee', type: 'float' },
        { name: 'Credit', type: 'int' },
        { name: 'HEIID', type: 'int' },
        { name: 'CourseTypeName', type: 'string' },
        { name: 'HEIName', type: 'string' }
    ],
    schema: {
        id: 'courses',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            //url: 'http://linkexwebapi.azurewebsites.net/application/Refs/genders',
            url: LinkExPortal.global.Vars.defaultUrl + '/api/Courses',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});