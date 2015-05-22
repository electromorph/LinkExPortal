Ext.define('LinkExPortal.view.sponsorMain.SponsorMainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.sponsormain-sponsormain',
    stores: {
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
