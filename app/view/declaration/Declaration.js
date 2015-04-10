
Ext.define("LinkExPortal.view.declaration.Declaration",{
    extend: "Ext.panel.Panel",
    requires: [
        'LinkExPortal.view.declaration.DeclarationController',
        'LinkExPortal.view.declaration.DeclarationModel'
    ],
    alias: 'widget.declaration',
    controller: "declaration-declaration",
    viewModel: {
        type: "declaration-declaration"
    },

    html: "Hello, World!!"
});
