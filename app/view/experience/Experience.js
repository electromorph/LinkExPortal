Ext.define("LinkExPortal.view.experience.Experience",{
    extend: "Ext.panel.Panel",
    requires: [
        'LinkExPortal.view.experience.ExperienceController',
        'LinkExPortal.view.experience.ExperienceModel',
        'LinkExPortal.view.experienceGrid.ExperienceGrid'
    ],
    alias: 'widget.experience',
    controller: "experience-experience",
    viewModel: {
        type: "experience-experience"
    },
    items: [{
        xtype: 'experienceGrid'
    }]
});
