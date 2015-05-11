Ext.define('LinkExPortal.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    stores: {
        commissionedcourses: {
            model: 'commissionedcourses',
            storeId: 'commissionedcourses',
            alias: 'commissionedcourses'/*,
             autoLoad: true*/
        },
        allCourses: {
            model: 'course',
            storeId: 'allCourses',
            alias: 'allCourses',
            autoLoad: true
        },
        FTPTList: {
            model: 'FTPTList',
            storeId: 'FTPTList',
            alias: 'FTPTList',
            autoLoad: true,
            listeners: {
                //Adds a blank row to the top for a 'null' selection.
                load: function(store){
                    var rec = { Description: 'Any', FTPTID: '-1' };
                    store.insert(0,rec);
                }
            }
        }
    }
});