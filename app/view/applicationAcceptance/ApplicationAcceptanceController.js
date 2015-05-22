var active = 0;
Ext.define('LinkExPortal.view.applicationAcceptance.ApplicationAcceptanceController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.applicationacceptance-applicationacceptance',
    init: function() {
       var view = this.getView();
        var myViewModel = this.getViewModel();
        myViewModel.set('currentRecord', view.rec);
        var applicationStore = this.getStore('applicationstoupdate');
    },
    approveClicked: function() {
        this.updateApplicationStatusToAccepted(LinkExPortal.global.Vars.ApplicationID.value);
        this.closeClicked();
    },
    declineClicked: function() {
        this.updateApplicationStatusToRejected(LinkExPortal.global.Vars.ApplicationID.value);
        this.closeClicked();
    },
    closeClicked: function() {
        var myView = this.getView();
        if (myView) {
            myView.close();
        }
    },
    nextClicked: function() {
        var appForm = this.getView();
        var layout = appForm.getLayout();
        ++active;
        layout.setActiveItem(active);
    },
    backClicked: function() {
        var appForm = this.getView();
        var layout = appForm.getLayout();
        --active;
        layout.setActiveItem(active);
    },
    updateApplicationStatusToAccepted: function(applicationID) {
        Ext.Ajax.request({ url: LinkExPortal.global.Vars.defaultUrl + 'cpdhealth/sponsorUpdateAccepted/' + applicationID,
            method: 'GET',
            success: function(responseObject){
                var obj = Ext.decode(responseObject.data);
                if (obj) {
                    Ext.Msg.alert('Record Saved!');
                }
            },
            failure: function(responseObject){
                var obj = Ext.decode(responseObject.responseText);
                Ext.Msg.alert('Status', 'Could not update.');
            }
        });
    },
    updateApplicationStatusToRejected: function(applicationID) {
        Ext.Msg.prompt('Rejection Reason', 'Please enter the reason that this application is being rejected:', function(btn, text){
            if (btn == 'ok'){
                var rejectReason = { reason: text };
                Ext.Ajax.request({ url: LinkExPortal.global.Vars.defaultUrl + 'cpdhealth/sponsorUpdateRejected',///' + applicationID,
                    method: 'POST',
                    jsonData: {
                        applicationID: applicationID,
                        reason: text
                    },
                    success: function(responseObject){
                        var obj = Ext.decode(responseObject.data);
                        if (obj) {
                            Ext.Msg.alert('Record Saved!');
                        }
                    },
                    failure: function(responseObject){
                        var obj = Ext.decode(responseObject.responseText);
                        Ext.Msg.alert('Status', 'Could not update.');
                    }
                });
            }
        });

    }
});
