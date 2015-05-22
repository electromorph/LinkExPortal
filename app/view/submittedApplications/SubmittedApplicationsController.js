Ext.define('LinkExPortal.view.submittedApplications.SubmittedApplicationsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.submittedapplications-submittedapplications',
    cancelClicked: function() {},
    acceptClicked: function(grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        LinkExPortal.global.Vars.ApplicationID = { value: rec.get('CPDHealthApplicationFormID'), present: true };
        var panel = Ext.create('LinkExPortal.view.applicationAcceptance.ApplicationAcceptance', {
            rec: rec
        });
    }
});
