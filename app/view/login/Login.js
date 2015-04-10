
Ext.define("LinkExPortal.view.login.Login",{
    extend: "Ext.panel.Panel",
    requires: [
        'LinkExPortal.view.login.LoginController',
        'LinkExPortal.view.login.LoginModel'
    ],
    alias: 'widget.login',
    controller: "login-login",
    viewModel: {
        type: "login-login"
    },

    html: "Hello, World!!"
});
