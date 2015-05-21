Ext.define("LinkExPortal.view.updateProfileAspNet.UpdateProfileAspNet",{
    extend: "Ext.window.Window",
    requires: [
        'LinkExPortal.view.updateProfileAspNet.UpdateProfileAspNetController',
        'LinkExPortal.view.updateProfileAspNet.UpdateProfileAspNetModel'
    ],
    alias: 'widget.updateprofileaspnet',
    controller: "updateprofileaspnet-updateprofileaspnet",
    viewModel: {
        type: "updateprofileaspnet-updateprofileaspnet"
    },
    bodyPadding: 10,
    title: 'Update Profile',
    closable: true,
    autoShow: true,
    items: [{
        xtype: 'textfield',
        id: 'fldId',
        name: 'fldId',
        fieldLabel: 'AspNetUserId',
        bind: {
            value: '{currentRecord.AspNetUserId}'
        }
    },{
        xtype: 'textfield',
        id: 'fldUsername',
        name: 'fldUsername',
        fieldLabel: 'Username',
        bind: {
            value: '{currentRecord.UserName}'
        }
    },{
        xtype: 'textfield',
        id: 'fldPhonenumber',
        name: 'fldPhonenumber',
        fieldLabel: 'Phone Number',
        bind: {
            value: '{currentRecord.PhoneNumber}'
        }
    },{
        xtype: 'textfield',
        id: 'fldEmail',
        name: 'fldEmail',
        fieldLabel: 'Email',
        bind: {
            value: '{currentRecord.Email}'
        }
    }],
    buttons: [{
        text: 'Save',
        formBind: true,
        listeners: {
            click: 'onUpdateAspNetProfileClick',
            scope: 'controller'
        }
    }]
});
