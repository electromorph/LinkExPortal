Ext.define('LinkExPortal.view.searchCourses.SearchCoursesModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.searchcourses-searchcourses',
    stores: {
        courseTypeList: {
            model: 'CourseType',
            storeId: 'courseTypeList',
            alias: 'coursetypelist',
            autoLoad: true,
            listeners: {
                load: function(store){
                    var rec = { Description: 'Any', CourseTypeID: '-1' };
                    store.insert(0,rec);
                }
            }
        },
        academicYearsList: {
            model: 'AcademicYearsList',
            storeId: 'academicYearsList',
            alias: 'academicYearsList',
            autoLoad: true,
            listeners: {
                load: function(store){
                    var rec = { Description: 'Any', AcademicYearID: '-1' };
                    store.insert(0,rec);
                }
            }
        },
        HEIList: {
            model: 'hei',
            storeId: 'HEIList',
            alias: 'HEIList',
            autoLoad: true,
            listeners: {
                load: function(store){
                    var rec = { Description: 'Any', HEIID: '-1' };
                    store.insert(0,rec);
                }
            }
        },
        FTPTList: {
            model: 'FTPTList',
            storeId: 'FTPTList',
            alias: 'FTPTList',
            autoLoad: true,
            listeners: {
                load: function(store){
                    var rec = { Description: 'Any', FTPTID: '-1' };
                    store.insert(0,rec);
                }
            }
        },
        allCourses: {
            model: 'course',
            storeId: 'allCourses',
            alias: 'allCourses',
            autoLoad: true
        }
    }
});
