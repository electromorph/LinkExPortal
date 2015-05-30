Ext.define('LinkExPortal.view.applicationForm.ApplicationFormModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.applicationform-applicationform',
    stores: {
        application: {
            model: 'CPDHealthApplication',
            storeId: 'cpdHealthApplication',
            alias: 'cpdHealthApplication',
            autoLoad: true,
            idProperty: 'CPDHealthApplicationFormID'
        },
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
        },
        courseSessionList: {
            model: 'coursesession',
            storeId: 'courseSessionList',
            alias: 'courseSessionList'
        },
        studentQualifications: {
            model: 'StudentQualification',
            storeId: 'studentQualifications',
            alias: 'studentQualifications',
            autoSync: true/*,
            autoLoad: true*/
        },
        studentExperience: {
            model: 'StudentExperience',
            storeId: 'studentExperience',
            alias: 'studentExperience',
            autoSync: true,
            autoLoad: true
        },
        studentReferences: {
            model: 'StudentReference',
            storeId: 'studentReferences',
            alias: 'studentReferences',
            autoSync: true,
            autoLoad: true
        },
        commissionedcourses: {
            model: 'commissionedcourses',
            storeId: 'commissionedcourses',
            alias: 'commissionedcourses'/*,
             autoLoad: true*/
        },
        allCourses: {
            model: 'course',
            storeId: 'allCourses',
            alias: 'allCourses',
            remoteFilter: true
        },
        FTPTList: {
            model: 'FTPTList',
            storeId: 'FTPTList',
            alias: 'FTPTList',
            autoLoad: true,
            listeners: {
                //Adds a blank row to the top for a 'null' selection.
                load: function(store){
                    var rec = { Description: 'Any', FTPTID: '-1' };
                    store.insert(0,rec);
                }
            }
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
        },
        // We'll explain formulas in more detail soon.
        professionalBodySelected: function (get) {
            var fn = get('ProfessionalBodyID');
            return (fn >0);
            }
    }
});
