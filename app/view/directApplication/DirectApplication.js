Ext.define("LinkExPortal.view.directApplication.DirectApplication",{
    extend: "Ext.panel.Panel",
    requires: [
        'LinkExPortal.view.directApplication.DirectApplicationController',
        'LinkExPortal.view.directApplication.DirectApplicationModel'
    ],
    alias: 'widget.directapplication',

    controller: "directapplication-directapplication",
    viewModel: {
        type: "directapplication-directapplication"
    },

    html: "Hello, World!!"
});
