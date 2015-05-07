Ext.define('LinkExPortal.view.searchCourses.SearchCoursesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.searchcourses-searchcourses',
    onSearch: function() {
        var myStore = Ext.getStore('allCourses');
        myStore.clearFilter(false);
        var myViewModel = this.getViewModel();
        if (myViewModel) {
            var currentRecord = myViewModel.get('currentRecord');
            if (currentRecord) {
                var courseStore = Ext.getStore('allCourses');
                if ((currentRecord.CourseTypeID) && (currentRecord.CourseTypeID != -1)) {
                    courseStore.addFilter({
                        property: 'CourseTypeID',
                        value: currentRecord.CourseTypeID
                    });
                }
                if ((currentRecord.AcademicYearID) && (currentRecord.AcademicYearID != -1)) {
                    courseStore.addFilter({
                        property: 'AcademicYearID',
                        value: currentRecord.AcademicYearID
                    });
                }
                if ((currentRecord.HEIID) && (currentRecord.HEIID != -1)) {
                    courseStore.addFilter({
                        property: 'HEIID',
                        value: currentRecord.HEIID
                    });
                }
            }
        }
    }
});
