var active = 0;
Ext.define('LinkExPortal.view.applicationForm.ApplicationFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.applicationform-applicationform',
    init: function() {
        var myStore = this.getStore('applicationForm');
        myStore.on({ load: { fn: this.finishedLoading, scope: this, single: true },
                     write: { fn: this.storeWrite, scope:  this }
        });
        this.on({ gotRecord: { fn: this.onGotRecord, scope: this } });
        if (!LinkExPortal.global.Vars.applicationID.present) {
            if (LinkExPortal.global.Vars.courseSessionID.present) {
                //Create new record in temp table.
                myStore.add({
                    Firstname: 'New',
                    Lastname: 'Record',
                    Email: 'new@record.com'
                });
                var newRecords = myStore.getNewRecords();
                if (newRecords.length > 0) {
                    var myViewModel = this.getViewModel();
                    if (myViewModel) {
                        newRecords[0].phantom = true;
                        myViewModel.set('currentRecord', newRecords[0]);
                    }
                }
            }
        }
    },

    //This is called from the store on load completion. It executes in a Store context, which is useless.
    //So we just use it to fire a new event that gets picked up by in controller context.
    finishedLoading: function(me, myViewModel) {
        this.fireEvent('gotRecord');
    },

    storeWrite: function(me, operation) {
        var iRecord = operation.response.result.data;
        console.log(iRecord.id);
    },

    //This is the event we really want to run after the store has loaded.
    onGotRecord: function userPanelExpand(me) {
        var myStore = this.getStore('applicationForm');
        if (myStore) {
            var myRecord = myStore.findRecord('CPDHealthApplicationFormTempID', LinkExPortal.global.Vars.applicationID.value);
            if (myRecord) {
                //var myData = myRecord.getData(true);
                var myViewModel = this.getViewModel();
                if (myViewModel) {
                    myViewModel.set('currentRecord', myRecord);
                }
            }
        }
    },
    saveCurrentRecord: function() {
        var myViewModel = this.getViewModel();
        var myRecord = myViewModel.get('currentRecord');
        var myData = myRecord.getData();
        myRecord.save();
        //myRecord.id = myRecord.CPDHealthApplicationFormTempID;
    },

    onSaveClicked: function() {
        this.saveCurrentRecord();
        var appForm = this.getView();
        var layout = appForm.getLayout();
        ++active;
        layout.setActiveItem(active);
    },

    onBackClicked: function() {
        this.saveCurrentRecord();
        var appForm = this.getView();
        var layout = appForm.getLayout();
        --active;
        layout.setActiveItem(active);
    }
});
