Ext.define('LinkExPortal.view.studentMain.StudentMainController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'Ext.window.MessageBox'
    ],
    alias: 'controller.studentmain-studentmain',
    onClickButton: function () {
        localStorage.removeItem('LinkExAccessToken');
        // Remove Main View
        this.getView().destroy();
        // Add the Login Window
        Ext.widget('loginform');
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
