var active = 0;
Ext.define('LinkExPortal.view.applicationForm.ApplicationFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.applicationform-applicationform',
    init: function() {
        var myStore = this.getStore('applicationForm');
        myStore.on({ load: { fn: this.finishedLoading, scope: this, single: true } });
        this.on({ gotRecord: { fn: this.onGotRecord, scope: this } });
        //Ext.get('btnid').setDisabled(true);
    },

    //This is called from the store on load completion. It executes in a Store context, which is useless.
    //So we just use it to fire a new event that gets picked up by in controller context.
    finishedLoading: function(me, myViewModel) {
        this.fireEvent('gotRecord');
    },

    //This is the event we really want to run after the store has loaded.
    onGotRecord: function userPanelExpand(me) {
        var myStore = this.getStore('applicationForm');
        var myRecord = myStore.findRecord('CPDHealthApplicationFormTempID', LinkExPortal.global.Vars.applicationID.value);
        var myData = myRecord.getData(true);
        var myViewModel = this.getViewModel();
        myViewModel.set('currentRecord', myRecord);
    },

    saveCurrentRecord: function() {
        var myViewModel = this.getViewModel();
        var myRecord = myViewModel.get('currentRecord');
        var myData = myRecord.getData();
        myRecord.save();
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
