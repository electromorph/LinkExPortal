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
        var thisView = this.getView();
        if (thisView) {
            var portalButton =  thisView.down('#btnBackToPortal');
        }
        if (portalButton) {
            if (LinkExPortal.global.Vars.loginToken) {
                portalButton.show();
            } else {
                portalButton.hide();
            }
        }
    },
    init: function() {
        //Populate name if an ID exists but no name.
        this.copyGlobalsToViewModel();
    },
    onClickBackToPortal: function() {
        var view = this.getView();
        if (view) {
            view.destroy();
            LinkExPortal.global.Utils.clearGlobalVars();
            this.showAppropriateForm();
        }
    },
    showAppropriateForm: function() {
        var screen = LinkExPortal.global.Utils.getAppropriateView();
        Ext.widget(screen);
    }
});