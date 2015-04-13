
Ext.define("LinkExPortal.view.qualifications.Qualifications",{
    extend: "Ext.panel.Panel",
    requires: [
        'LinkExPortal.view.qualifications.QualificationsController',
        'LinkExPortal.view.qualifications.QualificationsModel',
        'LinkExPortal.view.qualificationsGrid.QualificationsGrid'
    ],
    alias: 'widget.qualifications',
    controller: "qualifications-qualifications",
    viewModel: {
        type: "qualifications-qualifications"
    },

    items: [
        {
            xtype: 'qualificationsGrid'
        }
    ]
});
