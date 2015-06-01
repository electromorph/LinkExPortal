Ext.define('LinkExPortal.view.sponsorApplications.SponsorApplicationsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sponsorapplications-sponsorapplications',
    onSelectApplication : function(rowModel, record, index, eOpts) {
        var applicationID = record.get('CPDHealthApplicationFormID');
        var experienceStore = this.getStore('experience');
        if (experienceStore) {
            experienceStore.proxy.url = 'https://localhost:44306/studentexperiences/submittedforapplication/' + applicationID;
            experienceStore.load();
        }
        var qualificationsStore = this.getStore('qualifications');
        if (qualificationsStore) {
            qualificationsStore.proxy.url = 'https://localhost:44306/studentqualifications/submittedforapplication/' + applicationID;
            qualificationsStore.load();
        }
        var referencesStore = this.getStore('references');
        if (referencesStore) {
            referencesStore.proxy.url = 'https://localhost:44306/studentreferences/submittedforapplication/' + applicationID;
            referencesStore.load();
        }
    }
});
