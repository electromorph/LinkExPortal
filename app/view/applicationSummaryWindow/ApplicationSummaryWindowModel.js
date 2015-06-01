Ext.define('LinkExPortal.view.applicationSummaryWindow.ApplicationSummaryWindowModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.applicationsummarywindow-applicationsummarywindow',
    stores: {
        submittedApplication: {
            model: 'CPDHealthApplication',
            storeId: 'submittedApplications',
            alias: 'submittedApplications'
        },
        qualifications: {
            model: 'StudentQualificationSubmittedForApplication',
            storeId: 'qualifications',
            remoteFilter: true,
            alias: 'qualifications'
        },
        experience: {
            model: 'StudentExperienceSubmittedForApplication',
            storeId: 'experience',
            remoteFilter: true,
            alias: 'experience'
        },
        references: {
            model: 'StudentReferencesSubmittedForApplication',
            storeId: 'references',
            remoteFilter: true,
            alias: 'references'
        }
    }
});
