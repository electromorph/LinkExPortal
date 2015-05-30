Ext.define('LinkExPortal.view.sponsorMain.SponsorMainController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'Ext.window.MessageBox'
    ],
    alias: 'controller.sponsormain-sponsormain',
    routes: {
        '!:page': {
            action: 'onNavigate'
        }
    },
    onClickLogout: function () {
        localStorage.removeItem('LinkExAccessToken');
        // Remove Main View
        this.getView().destroy();
        // Add the Login Window
        Ext.widget('loginform');
    },
    onClickProfile: function () {
        location.href = "index.html#!profile";
    },
    onClickApplications: function () {
        location.href = "index.html#!applications";
    },
    onNavigate: function(page) {
        var summaryPanel = this.getView().lookupReference('applications');
        var profilePanel = this.getView().lookupReference('userprofile');
        if (page == 'profile') {
            summaryPanel.hide();
            profilePanel.show();
        }
        else if (page == 'applications') {
            summaryPanel.show();
            profilePanel.hide();
        } else {
            summaryPanel.show();
            profilePanel.hide();
        }
    }
});
