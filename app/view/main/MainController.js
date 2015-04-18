Ext.define('LinkExPortal.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],

    alias: 'controller.main',

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
        this.getViewModel().set('courseID', LinkExPortal.global.Vars.courseID);//Ext.create('User', result.data.user));
        this.getViewModel().set('HEIID', LinkExPortal.global.Vars.HEIID);
        this.getViewModel().set('applicationID', LinkExPortal.global.Vars.applicationID);
        this.getViewModel().set('courseSessionID', LinkExPortal.global.Vars.courseSessionID);
        this.getViewModel().set('showApplicationForm', LinkExPortal.global.Vars.showApplicationForm);
    }
});
