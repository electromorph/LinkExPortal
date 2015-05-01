Ext.define('LinkExPortal.view.commissionedCourses.CommissionedCoursesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.commissionedcourses-commissionedcourses',
    init: function(){
        if (LinkExPortal.global.Vars.trustID.present) {
            var myStore = Ext.getStore('commissionedcourses');
            myStore.clearFilter(false);
            myStore.addFilter({
                property: 'SponsorID',
                value   : LinkExPortal.global.Vars.trustID.value
            });
            myStore.setAutoLoad(true);
        }
    }
});
