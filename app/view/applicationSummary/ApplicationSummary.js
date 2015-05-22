Ext.define("LinkExPortal.view.applicationSummary.ApplicationSummary",{
    extend: "Ext.TabPanel",
    requires: [
        'LinkExPortal.view.applicationSummary.ApplicationSummaryController',
        'LinkExPortal.view.applicationSummary.ApplicationSummaryModel'
    ],
    alias: 'widget.applicationsummary',
    controller: "applicationsummary-applicationsummary",
    viewModel: {
        type: "applicationsummary-applicationsummary"
    },
    title: 'Application for course',
    defaults: {
        // applied to each contained panel
        bodyStyle: 'padding:15px',
        autoScroll: true
    },
    /*layout: {
        type: 'tabs', //'accordion',
        titleCollapse: false
    },*/
    store: 'applicationForm',
    items: [
        {
            title: 'Personal Details',
            layout: {
                type: 'vbox'
            },
            items: [
                {
                    xtype: 'label',
                    text: 'Basic Info'
                },{
                    xtype: 'displayfield',
                    id: 'fldTitle',
                    fieldLabel: 'Title',
                    name: 'Title',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.TitleText}'
                    }
                },
                {
                    xtype: 'displayfield',
                    id: 'fldLastname',
                    border: false,
                    name: 'Surname',
                    fieldLabel: 'Surname',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.Lastname}'
                    }
                },{
                    xtype: 'displayfield',
                    id: 'fldFirstname',
                    name: 'Forename',
                    fieldLabel: 'Forename(s)',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.Firstname}'
                    }
                },{
                    xtype: 'displayfield',
                    id: 'fldEmail',
                    name: 'Email',
                    fieldLabel: 'Email',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.Email}'
                    }
                },{
                    xtype: 'displayfield',
                    id: 'fldMobileNumber',
                    name: 'Mobile',
                    fieldLabel: 'Mobile',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.MobileNumber}'
                    }
                },{
                    xtype: 'displayfield',
                    id: 'fldPreviousSurname',
                    name: 'PreviousSurname',
                    fieldLabel: 'Previous Surname',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.PreviousSurname}'
                    }
                },{
                    xtype: 'displayfield',
                    id: 'fldKnownAs',
                    name: 'KnownAs',
                    fieldLabel: 'Known as',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.KnownAs}'
                    }
                },{
                    xtype: 'displayfield',
                    id: 'fldDOB',
                    fieldLabel: 'DOB',
                    name: 'DOB',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.DOB}'
                    }
                }
            ]
        },
        {
            title: 'Other information',
            layout: {
                type: 'vbox'
            },
            items: [
                {
                    xtype: 'displayfield',
                    id: 'fldNationality',
                    name: 'Nationality',
                    fieldLabel: 'Nationality',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.Nationality}'
                    }
                },{
                    xtype: 'displayfield',
                    id: 'fldCountryOfBirth',
                    fieldLabel: 'Country of Birth',
                    name: 'CountryOfBirth',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.CountryOfBirthText}'
                    }
                },{
                    xtype: 'displayfield',
                    id: 'fldGender',
                    fieldLabel: 'Gender',
                    name: 'Gender',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.GenderText}'
                    }
                },{
                    xtype: 'displayfield',
                    id: 'fldEthnicity',
                    fieldLabel: 'Ethnicity',
                    name: 'Ethnicity',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.EthnicityText}'
                    }
                }
            ]
        },
        {
            title: 'Professional Body Details',
            layout: {
                type: 'vbox'
            },
            items: [
                {
                    xtype: 'displayfield',
                    id: 'fldProfessionalBody',
                    fieldLabel: 'Professional Body',
                    name: 'ProfessionalBody',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.ProfessionalBody}'
                    }
                },{
                    xtype: 'displayfield',
                    id: 'fldMembershipNumber',
                    name: 'MembershipNumber',
                    fieldLabel: 'Membership Number',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.MembershipNumber}'/*,
                         hidden: '{selectedCPDHealthApplicationForm.ProfessionalBodyID} <= 0'*/
                    }
                },{
                    xtype: 'displayfield',
                    id: 'fldMembershipExpiry',
                    fieldLabel: 'Expiry Date',
                    name: 'MembershipExpiry',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.MembershipExpiry}'/*,
                         hidden: '{selectedCPDHealthApplicationForm.ProfessionalBodyID} > 0'*/
                    }
                }
            ]
        },
        {
            title: 'Home details',
            layout: {
                type: 'vbox'
            },
            items: [
                {
                    xtype: 'displayfield',
                    id: 'fldHomeAddress1',
                    name: 'HomeAddress1',
                    fieldLabel: 'Address',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.HomeAddress1}'
                    }
                },{
                    xtype: 'displayfield',
                    id: 'fldHomeAddress2',
                    hideEmptyLabel: false,
                    name: 'HomeAddress2',
                    fieldLabel: '',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.HomeAddress2}'
                    }
                },{
                    xtype: 'displayfield',
                    id: 'fldHomeCity',
                    name: 'HomeCity',
                    fieldLabel: 'City',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.HomeCity}'
                    }
                },{
                    xtype: 'displayfield',
                    id: 'fldHomePostCode',
                    name: 'HomePostcode',
                    fieldLabel: 'Postcode',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.HomePostCode}'
                    }
                },{
                    xtype: 'displayfield',
                    id: 'fldHomeCountry',
                    fieldLabel: 'Country',
                    name: 'HomeCountry',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.HomeCountryText}'
                    }
                },{
                    xtype: 'displayfield',
                    id: 'fldTelephone',
                    name: 'Telephone',
                    fieldLabel: 'Telephone',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.Telephone}'
                    }
                }
            ]
        },
        {
            title: 'Work details',
            layout: {
                type: 'vbox'
            },
            items: [
                {
                    xtype: 'label',
                    html: '<b>Work Details</b>'
                },{
                    xtype: 'displayfield',
                    id: 'fldWorkAddress1',
                    name: 'WorkAddress1',
                    fieldLabel: 'Address',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.WorkAddress1}'
                    }
                },{
                    xtype: 'displayfield',
                    id: 'fldWorkAddress2',
                    hideEmptyLabel: false,
                    name: 'WorkAddress2',
                    fieldLabel: '',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.WorkAddress2}'
                    }
                },{
                    xtype: 'displayfield',
                    id: 'fldWorkCity',
                    name: 'WorkCity',
                    fieldLabel: 'City',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.WorkCity}'
                    }
                },{
                    xtype: 'displayfield',
                    id: 'fldWorkPostcode',
                    name: 'WorkPostcode',
                    fieldLabel: 'Postcode',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.WorkPostcode}'
                    }
                },{
                    xtype: 'displayfield',
                    id: 'fldWorkCountry',
                    fieldLabel: 'Country',
                    name: 'WorkCountry',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.WorkCountryText}'
                    }
                },{
                    xtype: 'displayfield',
                    id: 'fldWorkEmail',
                    name: 'WorkEmail',
                    fieldLabel: 'Email',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.WorkEmail}'
                    }
                },{
                    xtype: 'displayfield',
                    id: 'fldWardDept',
                    name: 'WardDept',
                    fieldLabel: 'Ward/Dept',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.WardDept}'
                    }
                }
            ]
        },{
            title: 'Eligibility',
            layout: {
                type: 'vbox'
            },
            items: [
                {
                    xtype: 'displayfield',
                    id: 'fldCountryOfResidence',
                    fieldLabel: 'Country Of Residence',
                    name: 'CountryofResidence',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.CountryOfResidenceText}'
                    }
                },{
                    layout: {
                        type: 'hbox',
                        align: 'left'
                    },
                    items: [
                        {
                            xtype: 'label',
                            text: 'Have you been granted permanent residence in the EU / Indefinite leave to remain in the UK?',
                            forId: 'fldIsPermanentResident',
                            margin: '0 0 0 10'
                        },{
                            xtype: 'checkbox',
                            disabled: true,
                            id: 'fldIsPermanentResident',
                            bind: {
                                value: '{selectedCPDHealthApplicationForm.IsPermanentResident}'
                            }
                        }
                    ]
                }
            ]
        },{
            title: 'Qualifications',
            items: [
                {
                    xtype: 'gridpanel',
                    bind: {
                        store: '{qualifications}'
                    },
                    columns: [
                        { text: 'Name', dataIndex: 'Name' },
                        { text: 'DateFrom', dataIndex: 'DateFrom' },
                        { text: 'DateTo', dataIndex: 'DateTo' },
                        { text: 'Institution', dataIndex: 'Institution' },
                        { text: 'Comments', dataIndex: 'Comments' }
                    ]
                }
            ]
        },{
            title: 'Experience',
            items: [
                {
                    xtype: 'gridpanel',
                    bind: {
                        store: '{experience}'
                    },
                    columns: [
                        { text: 'Description', dataIndex: 'Qualification' },
                        { text: 'DateFrom', dataIndex: 'DateFrom' },
                        { text: 'DateTo', dataIndex: 'DateTo' },
                        { text: 'FullTime', dataIndex: 'Institution' },
                        { text: 'Organization', dataIndex: 'Comments' },
                        { text: 'Grade', dataIndex: 'Grade' },
                        { text: 'FullTime', dataIndex: 'FullTime' },
                        { text: 'Comments', dataIndex: 'Comments' }
                    ]
                }
            ]
        },{
            title: 'References',
            items: [
                {
                    xtype: 'gridpanel',
                    bind: {
                        store: '{references}'
                    },
                    columns: [
                        { text: 'FirstName', dataIndex: 'FirstName' },
                        { text: 'Surname', dataIndex: 'Surname' },
                        { text: 'JobTitle', dataIndex: 'JobTitle' },
                        { text: 'Organization', dataIndex: 'Organization' },
                        { text: 'RelationshipToApplicant', dataIndex: 'RelationshipToApplicant' },
                        { text: 'Address', dataIndex: 'Address' },
                        { text: 'Telephone', dataIndex: 'Telephone' },
                        { text: 'Fax', dataIndex: 'Fax' },
                        { text: 'Email', dataIndex: 'Email' },
                        { text: 'Title', dataIndex: 'TitleText' }
                    ]
                }
            ]
        },{
            title: 'Personal Statement',
            items: [
                {
                    xtype: 'textarea',
                    id: 'fldPersonalStatement',
                    disabled: true,
                    name: 'PersonalStatement',
                    fieldLabel: 'Personal Statement',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.PersonalStatement}'
                    }
                }
            ]
        },{
            title: 'Declaration',
            layout: {
                type: 'vbox'
            },
            items: [
                {
                    xtype: 'label',
                    text: 'Because of the nature of the programmes for which you are applying, they are exempt from the provision of Section 4 (2) of the Rehabilitation of Offenders Act 1974. By virtue of the Rehabilitation of Offenders Act 1974 (Exemptions) Order 1975 and the Children Act 1989, applicants are, therefore, not entitled to withhold information about convictions which for other purposes are "spent" under the provisions of the Act.'
                },{
                    xtype: 'label',
                    text: 'As you are applying for a programme in health or social work which may involve children or vulnerable adults, you must tell us about any criminal convictions, including spent sentences and cautions (including verbal cautions) and bind-over orders.'
                },{
                    xtype: 'displayfield',
                    id: 'fldDateOfFirstEntryToUK',
                    fieldLabel: 'Date of First Entry to UK',
                    name: 'DateOfFirstEntryToUK',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.DateOfFirstEntryToUK}'
                    }
                },{
                    xtype: 'displayfield',
                    id: 'fldDateOfGrantedResidency',
                    fieldLabel: 'Date residency was granted',
                    name: 'DateOfGrantedResidency',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.DateOfGrantedResidency}'
                    }
                },{
                    layout: {
                        type: 'hbox',
                        align: 'left'
                    },
                    items: [
                        {
                            xtype: 'label',
                            text: 'Do you have a criminal conviction?',
                            forId: 'hascriminalconviction',
                            margin: '0 0 0 10'
                        },{
                            xtype: 'checkbox',
                            id: 'fldHasCriminalConviction',
                            readOnly: true,
                            bind: {
                                value: '{selectedCPDHealthApplicationForm.HasCriminalConviction}'
                            }
                        }
                    ]
                },{
                    layout: {
                        type: 'hbox',
                        align: 'left'
                    },
                    items: [
                        {
                            xtype: 'label',
                            text: 'Have you had a caution (including verbal cautions)?',
                            forId: 'fldhasCaution',
                            margin: '0 0 0 10'
                        },{
                            xtype: 'checkbox',
                            id: 'fldHasCaution',
                            readOnly: true,
                            bind: {
                                value: '{selectedCPDHealthApplicationForm.HasCaution}'
                            }
                        }
                    ]
                },{
                    layout: {
                        type: 'hbox',
                        align: 'left'
                    },
                    items: [
                        {
                            xtype: 'label',
                            text: 'Do you have a spent criminal conviction?',
                            forId: 'fldHasSpentCriminalConviction',
                            margin: '0 0 0 10'
                        },{
                            xtype: 'checkbox',
                            id: 'fldHasSpentCriminalConviction',
                            readOnly: true,
                            bind: {
                                value: '{selectedCPDHealthApplicationForm.HasSpentCriminalConviction}'
                            }
                        }
                    ]
                },{
                    layout: {
                        type: 'hbox',
                        align: 'left'
                    },
                    items: [
                        {
                            xtype: 'label',
                            text: 'Do you have a bind-over order?',
                            forId: 'HasBindOverOrder',
                            margin: '0 0 0 10'

                        },{
                            xtype: 'checkbox',
                            id: 'fldHasBindOverOrder',
                            readOnly: true,
                            bind: {
                                value: '{selectedCPDHealthApplicationForm.HasBindOverOrder}'
                            }
                        }
                    ]
                },{
                    layout: {
                        type: 'hbox',
                        align: 'middle'
                    },
                    items: [
                        {
                            xtype: 'label',
                            text: 'Have you been through the Criminal Records Bureau Enhanced Disclosure process in relation to your current employment?',
                            forId: 'isCRBChecked',
                            margin: '0 0 0 10'
                        },{
                            xtype: 'checkbox',
                            id: 'fldIsCRBChecked',
                            readOnly: true,
                            bind: {
                                value: '{selectedCPDHealthApplicationForm.IsCRBChecked}'
                            }
                        }
                    ]
                },{
                    xtype: 'displayfield',
                    id: 'fldCRBCheckDate',
                    fieldLabel: 'Date of Check',
                    name: 'CRBCheckDate',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.CRBCheckDate}'
                    }
                },{
                    xtype: 'displayfield',
                    id: 'fldCRBCheckRefNo',
                    name: 'CRBCheckRefNo',
                    fieldLabel: 'CRB Reference No',
                    bind: {
                        value: '{selectedCPDHealthApplicationForm.CRBCheckRefNo}'
                    }
                }
            ]
        }]
});
