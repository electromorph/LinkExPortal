Ext.define('LinkExPortal.view.unsubmittedApplicationsList.UnsubmittedApplicationsListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.unsubmittedapplicationslist-unsubmittedapplicationslist',
    editClicked: function(grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        //LinkExPortal.global.Vars.ApplicationID = { value: rec.get('CPDHealthApplicationFormID'), present: true };
        var url = 'http://localhost:63342/LinkExPortal/index.html?applicationid=' + rec.get('CPDHealthApplicationFormTempID');
        var heiid = rec.get('HEIID');
        var courseid = rec.get('CourseID');
        var trustid = rec.get('SponsorID');
        if (heiid) {
            if (heiid > 0) {
                url += '&heiid=' + heiid;
            }
        }
        if (trustid) {
            if (trustid > 0) {
                url += '&trustid=' + trustid;
            }
        }
        if (courseid) {
            if (courseid > 0) {
                url += '&courseid=' + courseid;
            }
        }
        location.href = url;
    }
});
