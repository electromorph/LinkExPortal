Ext.define("LinkExPortal.view.userProfile.UserProfile",{
    extend: "Ext.panel.Panel",
    requires: [
        'LinkExPortal.view.userProfile.UserProfileController',
        'LinkExPortal.view.userProfile.UserProfileModel',
        'LinkExPortal.view.updateProfileAspNet.UpdateProfileAspNet',
        'LinkExPortal.view.updateProfileLinkEx.UpdateProfileLinkEx'
    ],
    alias: 'widget.userprofile',
    reference: 'userprofile',
    controller: "userprofile-userprofile",
    viewModel: {
        type: "userprofile-userprofile"
    },
    bodyPadding: 20,
    store: '{application}',
    items: [
    {
        items: [{
            xtype: 'textfield',
            id: 'username',
            name: 'UserName',
            fieldLabel: 'Login Name',
            disabled: true,
            bind: {
                value: '{currentRecord.UserName}'
            }
        },{
            xtype: 'textfield',
            id: 'email',
            name: 'Email',
            fieldLabel: 'Email',
            disabled: true,
            bind: {
                value: '{currentRecord.Email}'
            }
        },{
            xtype: 'textfield',
            id: 'phonenumber',
            name: 'PhoneNumber',
            fieldLabel: 'Phone Number',
            disabled: true,
            bind: {
                value: '{currentRecord.PhoneNumber}'
            }
        },{
            xtype: 'button',
            text: 'Update',
            listeners: {
                click: 'updateAspNetDataClick',
                scope: 'controller'
            }
        },{
           html: '<hr/>'
        },{
            xtype: 'textfield',
            id: 'name',
            name: 'name',
            fieldLabel: 'Name',
            disabled: true,
            bind: {
                value: '{currentRecord.FirstName} {currentRecord.LastName}'
            }
        },{
            xtype: 'button',
            text: 'Update',
            listeners: {
                click: 'updateLinkExDataClick',
                scope: 'controller'
            }
        }]
    }]
});
