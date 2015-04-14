Ext.define('LinkExPortal.view.applicationForm.ApplicationFormModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.applicationform-applicationform',
    data: {
        name: 'LinkExPortal'
    },
    stores: {
        countryList: {
            model: 'CountryList',
            storeId: 'homeCountryList',
            alias: 'homeCountryList',
            autoLoad: true,
            sorters: [{
                property: 'ListOrder',
                direction: 'DESC'
            }]
        },
        professionalBodyList: {
            model: 'ProfessionalBodiesList',
            storeId: 'professionalBodiesList',
            alias: 'professionalBodiesList',
            autoLoad: true
        },
        ethnicityList: {
            model: 'EthnicitiesList',
            storeId: 'ethnicitiesList',
            alias: 'ethnicitiesList',
            autoLoad: true
        },
        gendersList: {
            model: 'GendersList',
            storeId: 'gendersList',
            alias: 'gendersList',
            autoLoad: true
        },
        titleList: {
            model: 'TitleList',
            storeId: 'titleList',
            alias: 'titleList',
            autoLoad: true
        }
    }
});
