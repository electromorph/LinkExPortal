Ext.define('LinkExPortal.view.updateProfileLinkEx.UpdateProfileLinkExController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.updateprofilelinkex-updateprofilelinkex',
    init: function() {
        var myStore = this.getStore('account');
        myStore.on({ load: { fn: this.finishedLoading, scope: this, single: true },
            write: { fn: this.storeWrite, scope:  this }
        });
        this.on({ gotRecord: { fn: this.onGotRecord, scope: this } });
        myStore.load();
    },
    //This is called from the store on load completion. It executes in a Store context, which is useless.
    //So we just use it to fire a new event that gets picked up by in controller context.
    finishedLoading: function(me, myViewModel) {
        this.fireEvent('gotRecord');
    },
    //This is the event we really want to run after the store has loaded.
    onGotRecord: function userPanelExpand(me) {
        var myStore = this.getStore('account');
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
    onUpdateLinkExProfileClick: function(button) {
        var myViewModel = this.getViewModel();
        var myRecord = myViewModel.get('currentRecord');
        if (myRecord) {
            myRecord.save();
            var win = Ext.WindowManager.getActive();
            if (win) {
                win.close();
            }
        }
        else {
            Ext.Msg('An error occurred whilst saving data');
        }
    }
});
