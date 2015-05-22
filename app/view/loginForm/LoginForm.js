Ext.define("LinkExPortal.view.loginForm.LoginForm",{
    requires: [
        'LinkExPortal.view.loginForm.LoginFormController',
        'LinkExPortal.view.loginForm.LoginFormModel'
    ],
    extend: "Ext.window.Window",
    alias: 'widget.loginform',
    controller: "loginform-loginform",
    viewModel: {
        type: "loginform-loginform"
    },
    bodyPadding: 10,
    title: 'Login Window',
    closable: false,
    autoShow: true,
    items: {
        xtype: 'form',
        id: 'myform',
        //jsonSubmit: true,
        //url: 'https://localhost:44306/application/Refs/academicyears',
        url: 'https://localhost:44306/Token',
        //url: 'https://localhost:44306/api/Account/Register',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            value: 'max@maxdavies.com',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        },/*{
         xtype: 'textfield',
         name: 'email',
         fieldLabel: 'Email',
         allowBlank: false
         },*/{
            xtype: 'textfield',
            value: 'y1%HD6j)',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        },/*{
         xtype: 'textfield',
         name: 'confirmpassword',
         inputType: 'password',
         fieldLabel: 'Confirm Password',
         allowBlank: false
         },*/{
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginClick',
                scope: 'controller'
            }
        }]
    }
});
