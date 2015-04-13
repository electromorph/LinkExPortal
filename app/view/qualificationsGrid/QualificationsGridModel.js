Ext.define('LinkExPortal.view.qualificationsGrid.QualificationsGridModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.qualificationsgrid-qualificationsgrid',
    data: {
        name: 'LinkExPortal'
    },
    stores: {
        studentQualifications: {
            model: 'StudentQualification',
            storeId: 'studentQualification',
            alias: 'studentQualification',
            autoLoad: true
        }
    }
});
