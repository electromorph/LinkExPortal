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
        location.href = url;
    },
    onClickEmail: function() {
        var url = LinkExPortal.global.Vars.defaultUrl + "/cpdhealth/heigetsubmittedapplicationsasemail";
        Ext.Ajax.request({
            url: url,
            async: false,
            method: 'GET',
            success: function (responseObject) {
                var obj = Ext.decode(responseObject.responseText);
                Ext.Msg.alert('SUCCESS', 'Success! You have been emailed')
            },
            failure: function (responseObject) {
                //Should probably assume student role here.
                Ext.Msg.alert('ERROR', 'Emailing failed');
            }
        });
    }
});
