Ext.define('LinkExPortal.view.userProfile.UserProfileModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.userprofile-userprofile',
    stores: {
        userprofileinfo: {
            model: 'UserProfileInfo',
            storeId: 'userprofileinfo',
            alias: 'userprofileinfo',
            autoLoad: true
        }
    }
});
