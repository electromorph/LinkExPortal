
Ext.define("LinkExPortal.view.experience.Experience",{
    extend: "Ext.panel.Panel",
    requires: [
        'LinkExPortal.view.experience.ExperienceController',
        'LinkExPortal.view.experience.ExperienceModel'
    ],
    alias: 'widget.experience',
    controller: "experience-experience",
    viewModel: {
        type: "experience-experience"
    },

    html: "Hello, World!!"
});
