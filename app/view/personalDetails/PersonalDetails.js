Ext.define("LinkExPortal.view.personalDetails.PersonalDetails",{
    extend: "Ext.panel.Panel",
    alias: 'widget.personalDetails',
    requires: [
        'LinkExPortal.view.personalDetails.PersonalDetailsController',
        'LinkExPortal.view.personalDetails.PersonalDetailsModel'
    ],
    controller: "personaldetails-personaldetails",
    viewModel: {
        type: "personaldetails-personaldetails"
    },

    html: "Hello, World!!"
});
