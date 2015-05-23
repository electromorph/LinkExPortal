Ext.define('LinkExPortal.view.heiMain.HeiMainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.heimain-heimain',
    onClickLogout: function () {
        localStorage.removeItem('LinkExAccessToken');
        this.getView().destroy();
        Ext.widget('loginform');
    },
    onClickDownload: function () {
        var url = LinkExPortal.global.Vars.defaultUrl + "/cpdhealth/heigetsubmittedapplicationsasfile";
        alert(url);
        location.href = url;
    }
});
