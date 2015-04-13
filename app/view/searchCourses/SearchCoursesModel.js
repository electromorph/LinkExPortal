Ext.define('LinkExPortal.view.searchCourses.SearchCoursesModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.searchcourses-searchcourses',
    data: {
        name: 'LinkExPortal'
    },
    stores: {
        academicYearsList: {
            model: 'AcademicYearsList',
            storeId: 'academicYearsList',
            alias: 'academicYearsList',
            autoLoad: true
        }
    }
});
