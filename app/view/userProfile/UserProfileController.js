Ext.define('LinkExPortal.view.userProfile.UserProfileController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userprofile-userprofile',
    init: function() {
        var myStore = this.getStore('userprofileinfo');
        myStore.on({ load: { fn: this.finishedLoading, scope: this, single: true },
            write: { fn: this.storeWrite, scope:  this }
        });
        this.on({ gotRecord: { fn: this.onGotRecord, scope: this } });
    },
    //This is called from the store on load completion. It executes in a Store context, which is useless.
    //So we just use it to fire a new event that gets picked up by in controller context.
    finishedLoading: function(me, myViewModel) {
        this.fireEvent('gotRecord');
    },
    //This is the event we really want to run after the store has loaded.
    onGotRecord: function userPanelExpand(me) {
        var myStore = this.getStore('userprofileinfo');
        if (myStore) {
            var myRecord = myStore.first();//('AccountID', StudentDashboard.global.Vars.AccountID.value);
            if (myRecord) {
                //var myData = myRecord.getData(true);
                var myViewModel = this.getViewModel();
                if (myViewModel) {
                    myViewModel.set('currentRecord', myRecord);
                }
            }
        }
    },
    updateLinkExDataClick: function() {
        Ext.widget('updateprofilelinkex');
    },
    updateAspNetDataClick: function() {
        Ext.widget('updateprofileaspnet');
    }
});
