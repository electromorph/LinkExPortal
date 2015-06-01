Ext.define('LinkExPortal.view.unsubmittedApplicationsList.UnsubmittedApplicationsListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.unsubmittedapplicationslist-unsubmittedapplicationslist',
    editClicked: function(grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        var applicationID = rec.get('CPDHealthApplicationFormTempID');
        var url = 'http://localhost:63342/LinkExPortal/index.html?applicationid=' + rec.get('CPDHealthApplicationFormTempID');
        LinkExPortal.global.Vars.applicationID.value = applicationID;
        LinkExPortal.global.Vars.applicationID.present = true;
        var heiid = rec.get('HEIID');
        var courseid = rec.get('CourseID');
        var trustid = rec.get('SponsorID');
        if (heiid) {
            LinkExPortal.global.Vars.HEIID.value = heiid;
            LinkExPortal.global.Vars.HEIID.present = true;
        }
        if (trustid) {
            LinkExPortal.global.Vars.trustID.value = trustid;
            LinkExPortal.global.Vars.trustID.present = true;
        }
        if (courseid) {
            LinkExPortal.global.Vars.courseID.value = courseid;
            LinkExPortal.global.Vars.courseID.present = true;
        }
        //location.href = url;

        // Remove this Window & load the app form
        var parentView = this.getView().up().up().up();
        parentView.destroy();
        Ext.widget('app-main');
    },
    deleteClicked: function(grid, rowIndex, colIndex) {
        Ext.MessageBox.show({
            scope: {
                grid: grid,
                rowIndex: rowIndex
            },
            title : 'Delete Application',
            msg : 'Are you sure you want to delete this CPD application?',
            width : 300,
            buttons : Ext.MessageBox.YESNO,
            fn : this.deleteRow,
            icon : Ext.MessageBox.WARNING
        });
    },
    deleteRow: function(btn, text, eventOptions) {
        if (btn == 'yes') {
            var store = this.grid.getStore();
            var rec = store.getAt(this.rowIndex);
            var applicationID = rec.get('CPDHealthApplicationFormTempID');
            rec.erase();
            store.sync();
        }
    }
});
