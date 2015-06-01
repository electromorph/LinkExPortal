Ext.define('LinkExPortal.view.applicationsList.ApplicationsListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.applicationslist-applicationslist',
    showInformationWindow: function(grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        if (rec) {
            var appId = rec.get('CPDHealthApplicationFormID');
            if (appId) {
                showInformationWindow(appId);
            }
        }
        Ext.widget('applicationsummarywindow');
    }
});
