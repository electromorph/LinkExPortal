Ext.define('LinkExPortal.view.searchCourses.SearchCoursesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.searchcourses-searchcourses',
    onSearch: function() {
        var courseStore = Ext.getStore('allCourses');
        if (courseStore) {
            courseStore.clearFilter(true);
            var myViewModel = this.getViewModel();
            if (myViewModel) {
                var currentRecord = myViewModel.get('currentRecord');
                var HEIID = -1, academicYearID = -1, courseTypeID = '-1',keywords='';
                if (currentRecord) {
                    if (currentRecord.AcademicYearID) {
                        academicYearID = currentRecord.AcademicYearID;
                    }
                    if (currentRecord.CourseTypeID) {
                        courseTypeID = currentRecord.CourseTypeID;
                    }
                    if (LinkExPortal.global.Vars.HEIID.value > 0) {
                        HEIID = LinkExPortal.global.Vars.HEIID.value
                    } else {
                        if (currentRecord.HEIID > 0) {
                            HEIID = currentRecord.HEIID;
                        }
                    }
                    if (currentRecord.keywords != undefined) {
                        keywords = currentRecord.keywords
                    }
                }
            }
            courseStore.addFilter([
                { property: 'CourseTypeID', value: courseTypeID },
                { property: 'AcademicYearID', value: academicYearID },
                { property: 'HEIID', value: HEIID },
                { property: 'keywords', value: keywords}], true);
            courseStore.load();
        }
    }
});
