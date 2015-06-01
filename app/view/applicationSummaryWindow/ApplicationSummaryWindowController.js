Ext.define('LinkExPortal.view.applicationSummaryWindow.ApplicationSummaryWindowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.applicationsummarywindow-applicationsummarywindow',
    init: function() {
        var applicationStore = this.getStore('submittedApplication');
        applicationStore.proxy.url = LinkExPortal.global.Vars.defaultUrl + '/api/CPDHealthApplicationForms/' + LinkExPortal.global.Vars.applicationID.value;
        if (LinkExPortal.global.Vars.applicationID.present) {
            //applicationStore.addFilter({ property: 'CPDHealthApplicationID', value: LinkExPortal.global.Vars.applicationID.value });
            applicationStore.on({ load: { fn: this.finishedLoading, scope: this, single: true } })
        }
        applicationStore.load();
    },
    finishedLoading: function() {
        var myStore = this.getStore('submittedApplication');
        if (myStore) {
            var myRecord = myStore.findRecord('CPDHealthApplicationFormID', LinkExPortal.global.Vars.applicationID.value);
            if (myRecord) {
                var myViewModel = this.getViewModel();
                if (myViewModel) {
                    myViewModel.set('selectedCPDHealthApplicationForm', myRecord);
                    var applicationID = LinkExPortal.global.Vars.applicationID.value;
                    var experienceStore = this.getStore('experience');
                    if (experienceStore) {
                        experienceStore.proxy.url = LinkExPortal.global.Vars.defaultUrl + '/studentexperiences/submittedforapplication/' + applicationID;
                        experienceStore.load();
                    }
                    var qualificationsStore = this.getStore('qualifications');
                    if (qualificationsStore) {
                        qualificationsStore.proxy.url = LinkExPortal.global.Vars.defaultUrl + '/studentqualifications/submittedforapplication/' + applicationID;
                        qualificationsStore.load();
                    }
                    var referencesStore = this.getStore('references');
                    if (referencesStore) {
                        referencesStore.proxy.url = LinkExPortal.global.Vars.defaultUrl + '/studentreferences/submittedforapplication/' + applicationID;
                        referencesStore.load();
                    }
                }
            }
            else {
                Ext.Msg.alert('Could not find the specified applicationid - this will be treated as a new application');
                LinkExPortal.global.Vars.applicationID = { value: -1, present: false};
            }
        }
    }
});
