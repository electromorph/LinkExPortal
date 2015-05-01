Ext.define('LinkExPortal.view.qualificationsGrid.QualificationsGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.qualificationsgrid-qualificationsgrid',
    onAdd: function() {
        var myStore = this.getStore('studentQualifications');
        if (myStore) {
            myStore.add({
                Name: 'New Qualification',
                Comments: 'No comments'
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
        else {
            alert('data access problem');
        }
        alert('Added record: ');
    }
});
