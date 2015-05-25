Ext.define('LinkExPortal.view.unsubmittedApplicationsList.UnsubmittedApplicationsListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.unsubmittedapplicationslist-unsubmittedapplicationslist',
    editClicked: function(grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        //LinkExPortal.global.Vars.ApplicationID = { value: rec.get('CPDHealthApplicationFormID'), present: true };
        var url = 'http://localhost:63342/LinkExPortal/index.html?applicationid=' + rec.get('CPDHealthApplicationFormTempID');
        location.href = url;
    }
});
