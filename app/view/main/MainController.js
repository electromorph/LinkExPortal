Ext.define('LinkExPortal.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'Ext.window.MessageBox'
    ],
    alias: 'controller.main',
    copyGlobalsToViewModel: function() {
        LinkExPortal.global.Utils.calculateHideAndShow();
        this.getViewModel().set('courseID', LinkExPortal.global.Vars.courseID.value);//Ext.create('User', result.data.user));
        this.getViewModel().set('HEIID', LinkExPortal.global.Vars.HEIID.value);
        this.getViewModel().set('applicationID', LinkExPortal.global.Vars.applicationID.value);
        this.getViewModel().set('courseSessionID', LinkExPortal.global.Vars.courseSessionID.value);
        this.getViewModel().set('showApplicationForm', LinkExPortal.global.Vars.showApplicationForm);
        this.getViewModel().set('showSearchScreen', LinkExPortal.global.Vars.showSearchScreen);
        this.getViewModel().set('showTrustScreen', LinkExPortal.global.Vars.showTrustScreen);
        this.getViewModel().set('showCommissionedCoursesScreen', LinkExPortal.global.Vars.showCommissionedCoursesScreen);
        this.getViewModel().set('showHEIBox', LinkExPortal.global.Vars.showHEIBox);
        this.getViewModel().set('applicationFormSubmitted', LinkExPortal.global.Vars.applicationFormSubmitted);
    },
    init: function() {
        this.copyGlobalsToViewModel();
    },
    onTrustSelected: function() {
        this.copyGlobalsToViewModel();
    }
});