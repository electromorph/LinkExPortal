Ext.define('LinkExPortal.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    stores: {
        commissionedcourses: {
            model: 'commissionedcourses',
            storeId: 'commissionedcourses',
            alias: 'commissionedcourses'/*,
             autoLoad: true*/
        }
    }
});