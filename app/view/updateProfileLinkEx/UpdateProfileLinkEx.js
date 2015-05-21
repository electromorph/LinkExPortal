Ext.define("LinkExPortal.view.updateProfileLinkEx.UpdateProfileLinkEx",{
    extend: "Ext.window.Window",
    requires: [
        'LinkExPortal.view.updateProfileLinkEx.UpdateProfileLinkExController',
        'LinkExPortal.view.updateProfileLinkEx.UpdateProfileLinkExModel'
    ],
    alias: 'widget.updateprofilelinkex',
    store: 'account',
    controller: "updateprofilelinkex-updateprofilelinkex",
    viewModel: {
        type: "updateprofilelinkex-updateprofilelinkex"
    },
    bodyPadding: 10,
    title: 'Update Profile',
    closable: true,
    autoShow: true,
    items: [{
        xtype: 'textfield',
        id: 'firstname',
        name: 'firstname',
        fieldLabel: 'Firstname',
        bind: {
            value: '{currentRecord.FirstName}'
        }
    },{
        xtype: 'textfield',
        id: 'lastname',
        name: 'lastname',
        fieldLabel: 'Lastname',
        bind: {
            value: '{currentRecord.LastName}'
        }
    }],
    buttons: [{
        text: 'Save',
        formBind: true,
        listeners: {
            click: 'onUpdateLinkExProfileClick',
            scope: 'controller'
        }
    }]
});
