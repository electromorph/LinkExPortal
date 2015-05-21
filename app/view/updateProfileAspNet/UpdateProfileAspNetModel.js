Ext.define('LinkExPortal.view.updateProfileAspNet.UpdateProfileAspNetModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.updateprofileaspnet-updateprofileaspnet',
    stores: {
        aspnetuser: {
            model: 'AspNetUser',
            storeId: 'aspnetuser',
            alias: 'aspnetuser'
        }
    }
});
