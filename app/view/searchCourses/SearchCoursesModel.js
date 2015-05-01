Ext.define('LinkExPortal.view.searchCourses.SearchCoursesModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.searchcourses-searchcourses',
    stores: {
        courseTypeList: {
            model: 'CourseType',
            storeId: 'courseTypeList',
            alias: 'coursetypelist',
            autoLoad: true
        },
        academicYearsList: {
            model: 'AcademicYearsList',
            storeId: 'academicYearsList',
            alias: 'academicYearsList',
            autoLoad: true
        },
        HEIList: {
            model: 'hei',
            storeId: 'HEIList',
            alias: 'HEIList',
            autoLoad: true
        },
        FTPTList: {
            model: 'FTPTList',
            storeId: 'FTPTList',
            alias: 'FTPTList',
            autoLoad: true
        }/*,
        creditsList: {
            model: 'AvailableCreditOptions',
            storeId: 'creditsList',
            alias: 'creditsList',
            autoLoad: true,
             sorters: [{
             property: 'Description',
             direction: 'DESC'
             }]
        }*/
    }
});
