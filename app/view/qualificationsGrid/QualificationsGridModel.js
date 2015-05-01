Ext.define('LinkExPortal.view.qualificationsGrid.QualificationsGridModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.qualificationsgrid-qualificationsgrid',
    stores: {
        studentQualifications: {
            model: 'StudentQualification',
            storeId: 'studentQualifications',
            alias: 'studentQualifications',
            autoLoad: true
        }
    }
});
