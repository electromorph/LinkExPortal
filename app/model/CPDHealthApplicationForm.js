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
        { name: 'CountryOfResidenceID', type: 'int' },
        { name: 'ProfessionalBodyID', type: 'int' },
        { name: 'MembershipNumber', type: 'string' },
        { name: 'MembershipExpiry', type: 'date', dateReadFormat: 'Y-m-dT00:00:00', dateWriteFormat: 'Y-m-d' },
        { name: 'MedicalNotes', type: 'string' },
        { name: 'IsPermanentResident', type: 'bool' },
        { name: 'DateOfFirstEntryToUK', type: 'date', dateReadFormat: 'Y-m-dT00:00:00', dateWriteFormat: 'Y-m-d' },
        { name: 'DateOfGrantedResidency', type: 'date', dateReadFormat: 'Y-m-dT00:00:00', dateWriteFormat: 'Y-m-d' },
        { name: 'HasCriminalConviction', type: 'bool' },
        { name: 'HasCaution', type: 'bool' },
        { name: 'HasSpentCriminalConviction', type: 'bool' },
        { name: 'HasBindOverOrder', type: 'bool' },
        { name: 'IsCRBChecked', type: 'bool' },
        { name: 'CRBCheckDate', type: 'date', dateReadFormat: 'Y-m-dT00:00:00', dateWriteFormat: 'Y-m-d' },
        { name: 'CRBCheckRefNo', type: 'string' },
        { name: 'ConfirmedAgreement', type: 'bool' },
        { name: 'ConfirmationDate', type: 'date', dateReadFormat: 'Y-m-dT00:00:00', dateWriteFormat: 'Y-m-d' },
        { name: 'PersonalStatement', type: 'string' },
        { name: 'ApplicationStatusID', type: 'int' },
        { name: 'CourseSessionID', type: 'int' },
        { name: 'IsConfirmationOfPrerequisites', type: 'bool' },
        { name: 'IsCPDFunded', type: 'bool' },
        { name: 'IsSelfFunded', type: 'bool'},
        { name: 'IsPartFunded', type: 'bool' },
        { name: 'PartFundedPercentage', type: 'float' },
        { name: 'CanReceiveEmailConfirmation', type: 'bool' },
        { name: 'ChargeNurse', type: 'string' },
        { name: 'HospitalArea', type: 'string' },
        { name: 'HasTrustConfirmedCPDFunded', type: 'bool' },
        { name: 'Email', type: 'string' },
        { name: 'ApplicationDate', type: 'date', dateReadFormat: 'Y-m-dT00:00:00', dateWriteFormat: 'Y-m-d' },
        { name: 'PONumber', type: 'string' },
        { name: 'TitleID', type: 'int' }
    ],
    schema: {
        id: 'applicationformtemp',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            url: 'https://localhost:44306/api/CPDHealthApplicationFormTemps',
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
