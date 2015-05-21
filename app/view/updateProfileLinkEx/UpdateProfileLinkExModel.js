Ext.define('LinkExPortal.view.updateProfileLinkEx.UpdateProfileLinkExModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.updateprofilelinkex-updateprofilelinkex',
    stores: {
        account: {
            model: 'Account',
            storeId: 'account',
            alias: 'account'
        }
    }
});
