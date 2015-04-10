
Ext.define("LinkExPortal.view.accountOverview.AccountOverview",{
    extend: "Ext.panel.Panel",
    requires: [
        'LinkExPortal.view.accountOverview.AccountOverviewController',
        'LinkExPortal.view.accountOverview.AccountOverviewModel'
    ],
    alias: 'widget.accountOverview',
    requires: [
        'LinkExPortal.view.applicationForm.ApplicationFormController',
        'LinkExPortal.view.applicationForm.ApplicationFormModel'
    ],
    controller: "accountoverview-accountoverview",
    viewModel: {
        type: "accountoverview-accountoverview"
    },

    html: "Hello, World!!"
});
