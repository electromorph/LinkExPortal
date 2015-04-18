Ext.define('LinkExPortal.model.CPDHealthApplicationForm', {
    extend: 'Ext.data.Model',
    idProperty: 'CPDHealthApplicationFormTempID',
    fields: [
        { name: 'CPDHealthApplicationFormTempID', type: 'int' },
        { name: 'Description', type: 'string' },
        { name: 'Firstname', type: 'string' },
        { name: 'Lastname', type: 'string' },
        { name: 'PreviousSurname', type: 'string' },
        { name: 'KnownAs', type: 'string' },
        { name: 'GenderID', type: 'int' },
        { name: 'DOB', type: 'date', dateReadFormat: 'Y-m-dT00:00:00', dateWriteFormat: 'Y-m-d' },
        { name: 'HomeAddress1', type: 'string' },
        { name: 'HomeAddress2', type: 'string' },
        { name: 'HomeCity', type: 'string' },
        { name: 'HomePostCode', type: 'string' },
        { name: 'HomeCountryID', type: 'int' },
        { name: 'WorkAddress1', type: 'string' },
        { name: 'WorkAddress2', type: 'string' },
        { name: 'WorkCity', type: 'string' },
        { name: 'WorkPostcode', type: 'string' },
        { name: 'WorkCountryID', type: 'int' },
        { name: 'WardDept', type: 'string' },
        { name: 'Nationality', type: 'string' },
        { name: 'EthnicityID', type: 'int' },
        { name: 'MobileNumber', type: 'string' },
        { name: 'Telephone', type: 'string' },
        { name: 'CountryOfBirthID', type: 'int' },
        { name: 'CountryOfResidence', type: 'string' },
        { name: 'ProfessionalBodyID', type: 'int' },
        { name: 'MembershipNumber', type: 'string' },
        { name: 'MembershipExpiry', type: 'date', dateReadFormat: 'Y-m-dT00:00:00', dateWriteFormat: 'Y-m-d' },
        { name: 'MedicalNotes', type: 'string' },
        { name: 'IsPermanentResident', type: 'bool' },
        /*{ name: 'IsPermanentResidentDisplay', type: 'bool', mapping: 'IsPermanentResident',
            convert: function (v, record) {
                return typeof v === 'boolean' ? (v === true ? 1 : 0) : v;
            }
        },*/
        { name: 'DateOfFirstEntryToUK', type: 'date', dateReadFormat: 'Y-m-dT00:00:00', dateWriteFormat: 'Y-m-d' },
        { name: 'DateOfGrantedResidency', type: 'date', dateReadFormat: 'Y-m-dT00:00:00', dateWriteFormat: 'Y-m-d' },
        { name: 'HasCriminalConviction', type: 'bool' },
        /*{ name: 'HasCriminalConvictionDisplay', type: 'bool', mapping: 'HasCriminalConviction',
            convert: function (v, record) {
                return typeof v === 'boolean' ? (v === true ? 1 : 0) : v;
            }
        },*/
        { name: 'HasCaution', type: 'bool' },
        /*{ name: 'HasCautionDisplay', type: 'bool', mapping: 'HasCaution',
            convert: function (v, record) {
                return typeof v === 'boolean' ? (v === true ? 1 : 0) : v;
            }
        },*/
        { name: 'HasSpentCriminalConviction', type: 'bool' },
        /*{ name: 'HasSpentCriminalConvictionDisplay', type: 'bool', mapping: 'HasSpentCriminalConviction',
            convert: function (v, record) {
                return typeof v === 'boolean' ? (v === true ? 1 : 0) : v;
            }
        },*/
        { name: 'HasBindOverOrder', type: 'bool' },
        /*{ name: 'HasBindOverOrderDisplay', type: 'bool', mapping: 'HasBindOverOrder',
            convert: function (v, record) {
                return typeof v === 'boolean' ? (v === true ? 1 : 0) : v;
            }
        },*/
        { name: 'IsCRBChecked', type: 'bool' },
        /*{ name: 'IsCRBCheckedDisplay', type: 'bool', mapping: 'IsCRBChecked',
            convert: function (v, record) {
                return typeof v === 'boolean' ? (v === true ? 1 : 0) : v;
            }
        },*/
        { name: 'CRBCheckDate', type: 'date', dateReadFormat: 'Y-m-dT00:00:00', dateWriteFormat: 'Y-m-d' },
        { name: 'CRBCheckRefNo', type: 'string' },
        { name: 'ConfirmedAgreement', type: 'bool' },
        /*{ name: 'ConfirmedAgreement', type: 'bool', mapping: 'ConfirmedAgreement',
            convert: function (v, record) {
                return typeof v === 'boolean' ? (v === true ? 1 : 0) : v;
            }
        },*/
        { name: 'ConfirmationDate', type: 'date', dateReadFormat: 'Y-m-dT00:00:00', dateWriteFormat: 'Y-m-d' },
        { name: 'PersonalStatement', type: 'string' },
        { name: 'ApplicationStatusID', type: 'int' },
        { name: 'CourseSessionID', type: 'int' },
        { name: 'IsConfirmationOfPrerequisites', type: 'bool' },
        /*{ name: 'IsConfirmationOfPrerequisitesDisplay', type: 'bool', mapping: 'IsConfirmationOfPrerequisites',
            convert: function (v, record) {
                return typeof v === 'boolean' ? (v === true ? 1 : 0) : v;
            }
        },*/
        { name: 'IsCPDFunded', type: 'bool' },
        /*{ name: 'IsCPDFundedDisplay', type: 'bool', mapping: 'IsCPDFunded',
            convert: function (v, record) {
                return typeof v === 'boolean' ? (v === true ? 1 : 0) : v;
            }
        },*/
        { name: 'IsSelfFunded', type: 'bool'},
        /*{ name: 'IsSelfFundedDisplay', type: 'bool', mapping: 'IsSelfFunded',
            convert: function (v, record) {
                return typeof v === 'boolean' ? (v === true ? 1 : 0) : v;
            }
        },*/
        { name: 'IsPartFunded', type: 'bool' },
        /*{ name: 'IsPartFundedDisplay', type: 'bool',  mapping: 'IsPartFunded',
            convert: function (v, record) {
                return typeof v === 'boolean' ? (v === true ? 1 : 0) : v;
            }
        },*/
        { name: 'PartFundedPercentage', type: 'float' },
        { name: 'CanReceiveEmailConfirmation', type: 'bool' },
        /*{ name: 'CanReceiveEmailConfirmationDisplay', type: 'bool', mapping: 'CanReceiveEmailConfirmation',
            convert: function (v, record) {
                return typeof v === 'boolean' ? (v === true ? 1 : 0) : v;
            }
        },*/
        { name: 'ChargeNurse', type: 'string' },
        { name: 'HospitalArea', type: 'string' },
        { name: 'HasTrustConfirmedCPDFunded', type: 'bool' },
        /*{ name: 'HasTrustConfirmedCPDFundedDisplay', type: 'bool', mapping: 'HasTrustConfirmedCPDFunded',
            convert: function (v, record) {
                return typeof v === 'boolean' ? (v === true ? 1 : 0) : v;
            }
        },*/
        { name: 'Email', type: 'string' },
        { name: 'ApplicationDate', type: 'date', dateReadFormat: 'Y-m-dT00:00:00', dateWriteFormat: 'Y-m-d' },
        { name: 'PONumber', type: 'string' },
        { name: 'TitleID', type: 'int' }
    ],
    schema: {
        id: 'applicationform',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            //url: 'http://linkexwebapi.azurewebsites.net/api/CPDHealthApplicationFormTemps',
            url: 'http://localhost:26214/api/CPDHealthApplicationFormTemps',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false,
            writer: {
                type: "json",
                writeAllFields: true
            }
        }
    }
});
