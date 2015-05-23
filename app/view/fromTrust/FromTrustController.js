Ext.define('LinkExPortal.view.fromTrust.FromTrustController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.fromtrust-fromtrust',
    onTrustSelection: function(combo, record, options) {
        var data = record.getData();
        LinkExPortal.global.Vars.trustID.value = data.SponsorID;
        LinkExPortal.global.Vars.trustID.present = true;
        LinkExPortal.global.Utils.calculateHideAndShow();
        var myStore = Ext.getStore('commissionedcourses');
        myStore.clearFilter(false);
        myStore.addFilter({
            property: 'SponsorID',
            value   : data.SponsorID
        });
        myStore.load();
    },
    onClickedSelfFunded: function(radiogroup, newValue, oldValue) {
        if (newValue.fromTrust == true) {
            LinkExPortal.global.Vars.trustID = { value: 0, present: true };
        }
    }
});
