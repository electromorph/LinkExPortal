Ext.define('LinkExPortal.view.loginForm.LoginFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.loginform-loginform',
    onLoginClick: function(button){
        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // The getForm() method returns the Ext.form.Basic instance:
        //var form = this.getForm();
        //if (form.isValid()) {
        // Submit the Ajax request and handle the response
        var view = this.getView();
        var form = view.down('form');
        form.submit({
            params: {
                grant_type: 'password'
            },
            success: function(form, action) {
                // Set the localStorage value to true
                if (action.result) {
                    var access_token = action.result.access_token;
                    localStorage.setItem("LinkExAccessToken", access_token);
                    Ext.Ajax.setDefaultHeaders({
                        'Authorization': 'Bearer ' + access_token
                    });
                }
                // Remove Login Window
                view.destroy();
                this.showAppropriateForm();
            },
            failure: function(form, action) {
                var access_token;
                if (action.result){
                    access_token = action.result.access_token;
                }
                if (!access_token) {
                    var reasonRaw = action.response.responseText;
                    var reasonObject = JSON.parse(reasonRaw);
                    var reasonText = reasonObject.error_description;
                    Ext.Msg.alert('Failed', action.result ? action.result.message : (action.response ? reasonText : 'No response'));
                } else {
                    localStorage.setItem("LinkExAccessToken", access_token);
                    Ext.Ajax.setDefaultHeaders({
                        'Authorization': 'Bearer ' + access_token
                    });
                    // Remove Login Window
                    view.destroy();
                    // Add the main view to the viewport
                    this.showAppropriateForm();
                }
            },
            showAppropriateForm: function() {
                var screen = 'studentmain';
                if (LinkExPortal.global.Vars.applicationID.present) {
                    screen = 'app-main';
                } else {
                    Ext.Ajax.request({
                        url: LinkExPortal.global.Vars.defaultUrl + '/user/getrole',
                        async: false,
                        method: 'GET',
                        success: function (responseObject) {
                            var obj = Ext.decode(responseObject.responseText);
                            var userRole = obj.data.role;
                            if (userRole == 'SPONSOR') {
                                screen = 'sponsormain';
                            }
                            if (userRole == 'HEI') {
                                screen = 'heiMain'
                            }
                        },
                        failure: function (responseObject) {
                            //Should probably assume student role here.
                            Ext.Msg.alert('ERROR', 'User information could not be retrieved');
                        }
                    });
                }
                Ext.widget(screen);
            }
        });
        //}
    }
});
