Ext.define('LinkExPortal.view.applicationForm.ApplicationFormModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.applicationform-applicationform',
    data: {
        name: 'LinkExPortal'
    },
    stores: {
        applicationForm: {
            model: 'CPDHealthApplicationForm',
            storeId: 'cpdHealthApplicationForm',
            alias: 'cpdHealthApplicationForm',
            autoLoad: true,
            idProperty: 'CPDHealthApplicationFormTempID'
        },
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
    },
    formulas: {
        recordOfID: {
            bind: {
                bindTo: '{sessionListGrid.selection}',
                deep: true
            },
            get: function(session) { return session },
            set: function(session) { session = this.set('recordOfID', session) }
        }
    }
});
