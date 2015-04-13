Ext.define('LinkExPortal.view.experienceGrid.ExperienceGridModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.experiencegrid-experiencegrid',
    data: {
        name: 'LinkExPortal'
    },
    stores: {
        studentExperience: {
            model: 'StudentExperience',
            storeId: 'studentExperience',
            alias: 'studentExperience',
            autoLoad: true
        }
    }
});
