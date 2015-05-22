Ext.define('LinkExPortal.view.applicationsRejected.ApplicationsRejectedController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.applicationsrejected-applicationsrejected',
    informationClicked: function(grid, rowIndex, colIndex) {
    },
    acceptClicked: function(grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        alert("Accepting " + rec.get('Lastname'));
    },
    rejectClicked: function(grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        alert("Rejecting " + rec.get('Lastname'));
    }
});
