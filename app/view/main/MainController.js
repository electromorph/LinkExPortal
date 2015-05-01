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
    onClickButton: function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onClickPanelButton: function() {
        alert('Fire! button clicked');
    },

    init: function() {
        this.getViewModel().set('courseID', LinkExPortal.global.Vars.courseID.value);//Ext.create('User', result.data.user));
        this.getViewModel().set('HEIID', LinkExPortal.global.Vars.HEIID.value);
        this.getViewModel().set('applicationID', LinkExPortal.global.Vars.applicationID.value);
        this.getViewModel().set('courseSessionID', LinkExPortal.global.Vars.courseSessionID.value);
        this.getViewModel().set('showApplicationForm', LinkExPortal.global.Vars.showApplicationForm);
        this.getViewModel().set('showSearchScreen', LinkExPortal.global.Vars.showSearchScreen);
        this.getViewModel().set('showTrustScreen', LinkExPortal.global.Vars.showTrustScreen);
        this.getViewModel().set('showHEIBox', LinkExPortal.global.Vars.showHEIBox);
        this.getViewModel().set('applicationFormSubmitted', LinkExPortal.global.Vars.applicationFormSubmitted);

    },
    onTrustSelected: function() {
        this.copyGlobalsToViewModel();
    }
});