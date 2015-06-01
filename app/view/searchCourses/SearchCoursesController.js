Ext.define('LinkExPortal.view.searchCourses.SearchCoursesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.searchcourses-searchcourses',
    onSearch: function() {
        var courseStore = Ext.getStore('allCourses');
        if (courseStore) {
            courseStore.clearFilter(true);
            if (LinkExPortal.global.Vars.HEIID.value > 0) {
                LinkExPortal.global.Vars.searchHEIID = LinkExPortal.global.Vars.HEIID.value
            }
            courseStore.addFilter([
                { property: 'CourseTypeID', value: LinkExPortal.global.Vars.searchCourseTypeID },
                { property: 'AcademicYearID', value: LinkExPortal.global.Vars.searchAcademicYearID },
                { property: 'HEIID', value: LinkExPortal.global.Vars.searchHEIID },
                { property: 'keywords', value: LinkExPortal.global.Vars.searchKeywords}], true);
            courseStore.load();
        }
    },
    onCourseTypeSelected: function(combo, record, eOpts) {
        LinkExPortal.global.Vars.searchCourseTypeID = record.get('CourseTypeID');
    },
    onAcademicYearSelected: function(combo, record, eOpts) {
        LinkExPortal.global.Vars.searchAcademicYearID = record.get('ListItemID');
    },
    onHEIIDSelected: function(combo, record, eOpts) {
        LinkExPortal.global.Vars.searchHEIID = record.get('HEIID');
    },
    onKeywordsChange: function(field, event, eOpts) {
        LinkExPortal.global.Vars.searchKeywords = field.getValue();
    }
});
