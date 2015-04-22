var active = 0;
Ext.define('LinkExPortal.view.applicationForm.ApplicationFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.applicationform-applicationform',
    init: function() {
        var myStore = this.getStore('applicationForm');
        myStore.on({ load: { fn: this.finishedLoading, scope: this, single: true },
                     write: { fn: this.storeWrite, scope:  this }
        });
        this.on({ gotRecord: { fn: this.onGotRecord, scope: this } });
        if (!LinkExPortal.global.Vars.applicationID.present) {
            if (LinkExPortal.global.Vars.courseSessionID.present) {
                //Create new record in temp table.
                myStore.add({
                    Firstname: 'New',
                    Lastname: 'Record',
                    Email: 'new@record.com'
                });
                var newRecords = myStore.getNewRecords();
                if (newRecords.length > 0) {
                    var myViewModel = this.getViewModel();
                    if (myViewModel) {
                        newRecords[0].phantom = true;
                        myViewModel.set('currentRecord', newRecords[0]);
                    }
                }
            }
        }
    },

    //This is called from the store on load completion. It executes in a Store context, which is useless.
    //So we just use it to fire a new event that gets picked up by in controller context.
    finishedLoading: function(me, myViewModel) {
        this.fireEvent('gotRecord');
    },

    storeWrite: function(me, operation) {
        var iRecord = operation.response.result.data;
        console.log(iRecord.id);
    },

    //This is the event we really want to run after the store has loaded.
    onGotRecord: function userPanelExpand(me) {
        var myStore = this.getStore('applicationForm');
        if (myStore) {
            var myRecord = myStore.findRecord('CPDHealthApplicationFormTempID', LinkExPortal.global.Vars.applicationID.value);
            if (myRecord) {
                //var myData = myRecord.getData(true);
                var myViewModel = this.getViewModel();
                if (myViewModel) {
                    myViewModel.set('currentRecord', myRecord);
                }
            }
        }
    },
    saveCurrentRecord: function() {
        var myViewModel = this.getViewModel();
        var myRecord = myViewModel.get('currentRecord');
        var myData = myRecord.getData();
        myRecord.save();
        //myRecord.id = myRecord.CPDHealthApplicationFormTempID;
    },

    onSaveClicked: function() {
        this.saveCurrentRecord();
        var appForm = this.getView();
        var layout = appForm.getLayout();
        ++active;
        layout.setActiveItem(active);
    },

    onBackClicked: function() {
        this.saveCurrentRecord();
        var appForm = this.getView();
        var layout = appForm.getLayout();
        --active;
        layout.setActiveItem(active);
    },

    onSubmit: function() {
        //Save current record
        this.saveCurrentRecord();

        //Retrieve current record
        //var myViewModel = this.getViewModel();
        //var myRecord = myViewModel.get('currentRecord');
        //Create a new record in ApplicationForm and store the contents of the current record.
        var myStore = this.getStore('application');
        //alert('DOB: ' + Ext.getCmp('fldDOB').getValue() + '  MembershipExpiry' + Ext.getCmp('fldMembershipExpiry').getValue());
        myStore.add({
            //Description: myRecord.Description,
            Firstname: Ext.getCmp('fldLastname').getValue(),
            Lastname: Ext.getCmp('fldFirstname').getValue(),
            PreviousSurname: Ext.getCmp('fldPreviousSurname').getValue(),
            KnownAs: Ext.getCmp('fldKnownAs').getValue(),
            GenderID: Ext.getCmp('fldGenderID').getValue(),
            DOB: Ext.getCmp('fldDOB').getValue(),
            HomeAddress1: Ext.getCmp('fldHomeAddress1').getValue(),
            HomeAddress2: Ext.getCmp('fldHomeAddress2').getValue(),
            HomeCity: Ext.getCmp('fldHomeCity').getValue(),
            HomePostCode: Ext.getCmp('fldHomePostCode').getValue(),
            HomeCountryID: Ext.getCmp('fldHomeCountryID').getValue(),
            WorkAddress1: Ext.getCmp('fldWorkAddress1').getValue(),
            WorkAddress2: Ext.getCmp('fldWorkAddress2').getValue(),
            WorkCity: Ext.getCmp('fldWorkCity').getValue(),
            WorkPostcode: Ext.getCmp('fldWorkPostcode').getValue(),
            WorkCountryID: Ext.getCmp('fldWorkCountryID').getValue(),
            WardDept: Ext.getCmp('fldWardDept').getValue(),
            Nationality: Ext.getCmp('fldNationality').getValue(),
            EthnicityID: Ext.getCmp('fldEthnicityID').getValue(),
            MobileNumber: Ext.getCmp('fldMobileNumber').getValue(),
            Telephone: Ext.getCmp('fldTelephone').getValue(),
            CountryOfBirthID: Ext.getCmp('fldCountryOfBirthID').getValue(),
            fldCountryOfResidenceID: Ext.getCmp('fldCountryOfResidenceID').getValue(),
            ProfessionalBodyID: Ext.getCmp('fldProfessionalBodyID').getValue(),
            MembershipNumber: Ext.getCmp('fldMembershipNumber').getValue(),
            MembershipExpiry: Ext.getCmp('fldMembershipExpiry').getValue(),
            //MedicalNotes: Ext.getCmp('fldMedicalNotes').getValue(),
            IsPermanentResident: Ext.getCmp('fldIsPermanentResident').getValue(),
            DateOfFirstEntryToUK: Ext.getCmp('fldDateOfFirstEntryToUK').getValue(),
            DateOfGrantedResidency: Ext.getCmp('fldDateOfGrantedResidency').getValue(),
            HasCriminalConviction: Ext.getCmp('fldHasCriminalConviction').getValue(),
            HasCaution: Ext.getCmp('fldHasCaution').getValue(),
            HasSpentCriminalConviction: Ext.getCmp('fldHasSpentCriminalConviction').getValue(),
            HasBindOverOrder: Ext.getCmp('fldHasBindOverOrder').getValue(),
            IsCRBChecked: Ext.getCmp('fldIsCRBChecked').getValue(),
            CRBCheckDate: Ext.getCmp('fldCRBCheckDate').getValue(),
            CRBCheckRefNo: Ext.getCmp('fldCRBCheckRefNo').getValue(),
            ConfirmedAgreement: Ext.getCmp('fldConfirmedAgreement').getValue(),
            ConfirmationDate: Ext.getCmp('fldConfirmationDate').getValue(),
            PersonalStatement: Ext.getCmp('fldPersonalStatement').getValue(),
            ApplicationStatusID: 19,
            CourseSessionID: 1,
            //IsConfirmationOfPrerequisites: Ext.getCmp('fldIsConfirmationOfPrerequisites').getValue(),
            //IsCPDFunded: Ext.getCmp('fldIsCPDFunded').getValue(),
            //IsSelfFunded: Ext.getCmp('fldIsSelfFunded').getValue(),
            //IsPartFunded: Ext.getCmp('fldIsPartFunded').getValue(),
            //PartFundedPercentage: Ext.getCmp('fldPartFundedPercentage').getValue(),
            //CanReceiveEmailConfirmation: Ext.getCmp('fldCanReceiveEmailConfirmation').getValue(),
            //ChargeNurse: Ext.getCmp('fldChargeNurse').getValue(),
            //HospitalArea: Ext.getCmp('fldHospitalArea').getValue(),
            //HasTrustConfirmedCPDFunded: Ext.getCmp('fldHasTrustConfirmedCPDFunded').getValue(),
            Email: Ext.getCmp('fldEmail').getValue(),
            //ApplicationDate: Ext.getCmp('fldApplicationDate').getValue(),
            //PONumber: Ext.getCmp('fldPONumber').getValue(),
            TitleID: Ext.getCmp('fldTitleID').getValue()
        });
        myStore.save();
        var myStore2 = this.getStore('applicationForm');
        if (myStore2) {
            alert('Found applicationForm store');
        }
        var myRecord = myStore2.findRecord('CPDHealthApplicationFormTempID', LinkExPortal.global.Vars.applicationID.value);
        if (myRecord) {
            alert('myRecord (' + LinkExPortal.global.Vars.applicationID.value +  ')was found: ' + myRecord);
        }
        myRecord.erase();
        alert('Successfully dropped MyRecord');
        //myStore2.save();
        alert('Successfully saved store');
        applicationFormSubmitted = true;
        alert('Set the submitted flag to true');
    }
});
