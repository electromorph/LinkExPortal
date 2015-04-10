
Ext.define("LinkExPortal.view.qualifications.Qualifications",{
    extend: "Ext.panel.Panel",
    requires: [
        'LinkExPortal.view.qualifications.QualificationsController',
        'LinkExPortal.view.qualifications.QualificationsModel'
    ],
    alias: 'widget.qualifications',
    controller: "qualifications-qualifications",
    viewModel: {
        type: "qualifications-qualifications"
    },

    html: "Hello, World!!"
});
