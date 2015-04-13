Ext.define("LinkExPortal.view.applicationForm.ApplicationForm",{
    extend: "Ext.panel.Panel",
    requires: [
        'LinkExPortal.view.applicationForm.ApplicationFormController',
        'LinkExPortal.view.applicationForm.ApplicationFormModel'
    ],
    alias: 'widget.applicationForm',
    controller: "applicationform-applicationform",
    viewModel: {
        type: "applicationform-applicationform"
    },
    title: 'Application for course',
    defaults: {
        // applied to each contained panel
        bodyStyle: 'padding:15px'
    },
    layout: {
        // layout-specific configs go here
        type: 'accordion',
        titleCollapse: false
        //activeOnTop: true
    },
    items: [
        {
            title: 'Personal Details',
            items: [
                {
                    xtype: 'textfield',
                    name: 'Surname',
                    fieldLabel: 'Surname',
                    allowBlank: false,
                    bind: {
                        value: '{Lastname}'
                    }
                },
                {
                    xtype: 'textfield',
                    name: 'Forename',
                    fieldLabel: 'Forename(s)',
                    allowBlank: false,
                    bind: {
                        value: '{Firstname}'
                    }
                },
                {
                    xtype: 'textfield',
                    name: 'Email',
                    fieldLabel: 'Email',
                    allowBlank: false,
                    bind: {
                        value: '{Email}'
                    }
                },
                {
                    xtype: 'textfield',
                    name: 'Mobile',
                    fieldLabel: 'Mobile',
                    allowBlank: true,
                    bind: {
                        value: '{MobileNumber}'
                    }
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Country of Birth',
                    queryMode: 'local',
                    forceSelection: true,
                    displayField: 'Description',
                    valueField: 'ListItemID',
                    name: 'CountryOfBirth',
                    bind: {
                        store: '{countryList}',
                        value: '{CountryOfBirthID}'
                    }
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Professional Body',
                    queryMode: 'local',
                    displayField: 'Description',
                    valueField: 'ListItemID',
                    forceSelection: true,
                    name: 'ProfessionalBody',
                    bind: {
                        store: '{professionalBodyList}',
                        value: '{ProfessionalBodyID}'
                    }
                },
                {
                    xtype: 'textfield',
                    name: 'MembershipNumber',
                    fieldLabel: 'Membership Number',
                    allowBlank: true,
                    bind: {
                        value: '{MembershipNumber}',
                        hidden: '{ProfessionalBodyID} <= 0'
                    }
                },
                {
                    xtype: 'datefield',
                    anchor: '100%',
                    fieldLabel: 'Expiry Date',
                    name: 'MembershipExpiry',
                    format: 'd/m/Y',
                    maxValue: new Date(),  //Today or earlier.
                    bind: {
                        value: '{MembershipExpiry}',
                        hidden: '{ProfessionalBodyID} > 0'
                    }
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Gender',
                    queryMode: 'local',
                    editable: false,
                    displayField: 'Description',
                    valueField: 'ListItemID',
                    name: 'Gender',
                    bind: {
                        store: '{gendersList}',
                        value: '{GenderID}'
                    }
                },
                {
                    xtype: 'textfield',
                    name: 'Nationality',
                    fieldLabel: 'Nationality',
                    allowBlank: true,
                    bind: {
                        value: '{Nationality}'
                    }
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Ethnicity',
                    queryMode: 'local',
                    displayField: 'Description',
                    valueField: 'ListItemID',
                    name: 'Ethnicity',
                    forceSelection: true,
                    bind: {
                        store: '{ethnicitiesList}',
                        value: '{EthnicityID}'
                    }
                },
                {
                    xtype: 'textfield',
                    name: 'PreviousSurname',
                    fieldLabel: 'Previous Surname',
                    allowBlank: true,
                    bind: {
                        value: '{PreviousSurname}'
                    }
                },
                {
                    xtype: 'textfield',
                    name: 'KnownAs',
                    fieldLabel: 'Known as',
                    allowBlank: true,
                    bind: {
                        value: '{KnownAs}'
                    }
                },
                {
                    xtype: 'datefield',
                    anchor: '100%',
                    fieldLabel: 'DOB',
                    name: 'from_date',
                    format: 'd/m/Y',
                    maxValue: new Date(),  //Today or earlier.
                    bind: {
                        value: '{DOB}'
                    }
                }
            ]
        },
        {
            title: 'Home details',
            items: [
            {
                xtype: 'textfield',
                name: 'HomeAddress1',
                fieldLabel: 'Address',
                allowBlank: false,
                bind: {
                    value: '{HomeAddress1}'
                }
            },
            {
                xtype: 'textfield',
                name: 'HomeAddress2',
                fieldLabel: ' ',
                allowBlank: true,
                bind: {
                    value: '{HomeAddress2}'
                }
            },
            {
                xtype: 'textfield',
                name: 'HomeCity',
                fieldLabel: 'City',
                allowBlank: false,
                bind: {
                    value: '{HomeCity}'
                }
            },
            {
                xtype: 'textfield',
                name: 'HomePostcode',
                fieldLabel: 'Postcode',
                allowBlank: false,
                bind: {
                    value: '{HomePostcode}'
                }
            },
            {
                xtype: 'combobox',
                fieldLabel: 'Country',
                queryMode: 'local',
                displayField: 'Description',
                valueField: 'ListItemID',
                name: 'HomeCountry',
                forceSelection: true,
                bind: {
                    store: '{countryList}',
                    value: '{HomeCountryID}'
                }
            },
            {
                xtype: 'textfield',
                name: 'Telephone',
                fieldLabel: 'Telephone',
                allowBlank: true,
                bind: {
                    value: '{Telephone}'
                }
            }
        ]
    },
    {
        title: 'Work details',
        items: [
            {
                xtype: 'label',
                html: '<b>Work Details</b>'
            },
            {
                xtype: 'textfield',
                name: 'WorkAddress1',
                fieldLabel: 'Address',
                allowBlank: true,
                bind: {
                    value: '{WorkAddress1}'
                }
            },
            {
                xtype: 'textfield',
                name: 'WorkAddress2',
                fieldLabel: ' ',
                allowBlank: true,
                bind: {
                    value: '{WorkAddress2}'
                }
            },
            {
                xtype: 'textfield',
                name: 'WorkCity',
                fieldLabel: 'City',
                allowBlank: true,
                bind: {
                    value: '{WorkCity}'
                }
            },
            {
                xtype: 'textfield',
                name: 'WorkPostcode',
                fieldLabel: 'Postcode',
                allowBlank: true,
                bind: {
                    value: '{WorkPostcode}'
                }
            },
            {
                xtype: 'combobox',
                fieldLabel: 'Country',
                queryMode: 'local',
                displayField: 'Description',
                valueField: 'ListItemID',
                forceSelection: true,
                name: 'WorkCountry',
                bind: {
                    store: '{countryList}',
                    value: '{WorkCountryID}'
                }
            },
            {
                xtype: 'textfield',
                name: 'WorkEmail',
                fieldLabel: 'Email',
                allowBlank: true,
                bind: {
                    value: '{WorkEmail}'
                }
            },
            {
                xtype: 'textfield',
                name: 'WardDept',
                fieldLabel: 'Ward/Dept',
                allowBlank: true,
                bind: {
                    value: '{WardDept}'
                }
            }
        ]
    },{
        title: 'Eligibility',
        items: [
            {
                layout: {
                    type: 'hbox',
                    align: 'left'
                },
                items: [
                    {
                        xtype: 'label',
                        text: 'Have you been granted permanent residence in the EU / Indefinite leave to remain in the UK?',
                        forId: 'hascriminalconviction',
                        margin: '0 0 0 10'
                    },{
                        xtype: 'segmentedbutton',
                        bind: {
                            value: '{IsPermanentResident}'
                        },
                        items: [
                            {
                                name: 'isPermanentResident',
                                inputValue: 'true',
                                text: 'Yes'
                            },
                            {
                                name: 'isPermanentResident',
                                inputValue: 'false',
                                text: 'No'
                            }
                        ]
                    }
                ]
            },{
                xtype: 'datefield',
                anchor: '100%',
                fieldLabel: 'Date of First Entry to UK',
                name: 'DateOfFirstEntryToUK',
                format: 'd/m/Y',
                maxValue: new Date(),  //Today or earlier.
                bind: {
                    value: '{DateOfFirstEntryToUK}'
                }
            },
            {
                xtype: 'datefield',
                anchor: '100%',
                fieldLabel: 'Date residency was granted',
                name: 'DateOfGrantedResidency',
                format: 'd/m/Y',
                maxValue: new Date(),  //Today or earlier.
                bind: {
                    value: '{MembershipExpiry}'
                }
            },
            {
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
                    },
                    {
                        xtype: 'segmentedbutton',
                        bind: {
                            value: '{HasCriminalConviction}'
                        },
                        fieldLabel: ' ',
                        items: [
                            {
                                name: 'hascriminalconviction',
                                inputValue: 'true',
                                text: 'Yes'
                            },
                            {
                                name: 'hascriminalconviction',
                                inputValue: 'false',
                                text: 'No'
                            }
                        ]
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
                        forId: 'hasCaution',
                        margin: '0 0 0 10'
                    },{
                        xtype: 'segmentedbutton',
                        bind: {
                            value: '{HasCaution}'
                        },
                        items: [
                            {
                                name: 'hasCaution',
                                inputValue: 'true',
                                text: 'Yes'
                            },
                            {
                                name: 'hasCaution',
                                inputValue: 'false',
                                text: 'No'
                            }
                        ]
                    }
                ]
            },
            {
                layout: {
                    type: 'hbox',
                    align: 'left'
                },
                items: [
                    {
                        xtype: 'label',
                        text: 'Do you have a spent criminal conviction?',
                        forId: 'hasSpentCriminalConviction',
                        margin: '0 0 0 10'
                    },
                    {
                        xtype: 'segmentedbutton',
                        bind: {
                            value: '{HasSpentCriminalConviction}'
                        },
                        items: [
                            {
                                name: 'hasSpentCriminalConviction',
                                inputValue: 'true',
                                text: 'Yes'
                            },
                            {
                                name: 'hasSpentCriminalConviction',
                                inputValue: 'false',
                                text: 'No'
                            }
                        ]
                    }
                ]
            },
            {
                layout: {
                    type: 'hbox',
                    align: 'left'
                },
                items: [
                    {
                        xtype: 'label',
                        text: 'Do you have a bind-over order?',
                        forId: 'hasBindOverOrder',
                        margin: '0 0 0 10'

                    },{
                        xtype: 'segmentedbutton',
                        bind: {
                            value: '{HasBindOverOrder}'
                        },
                        items: [
                            {
                                name: 'hasBindOverOrder',
                                inputValue: 'true',
                                text: 'Yes'
                            },
                            {
                                name: 'hasBindOverOrder',
                                inputValue: 'false',
                                text: 'No'
                            }
                        ]
                    }
                ]
            },
            {
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
                    },
                    {
                        xtype: 'segmentedbutton',
                        id: 'isCRBChecked',
                        bind: {
                            value: '{IsCRBChecked}'
                        },
                        items: [
                            {
                                name: 'isCRBChecked',
                                inputValue: 'true',
                                text: 'Yes'
                            },
                            {
                                name: 'isCRBChecked',
                                inputValue: 'false',
                                text: 'No'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'datefield',
                anchor: '100%',
                fieldLabel: 'Date of Check',
                name: 'CRBCheckDate',
                format: 'd/m/Y',
                maxValue: new Date(),  //Today or earlier.
                bind: {
                    value: '{CRBCheckDate}'
                }
            },
            {
                xtype: 'textfield',
                name: 'CRBCheckRefNo',
                fieldLabel: 'CRB Reference No',
                allowBlank: true,
                bind: {
                    value: '{CRBCheckRefNo}'
                }
            },
            {
                xtype: 'fieldcontainer',
                fieldLabel: 'Toppings',
                defaultType: 'checkboxfield',
                items: [{
                    boxLabel  : 'I agree to the above declararation',
                    name      : 'ConfirmedAgreement',
                    inputValue: '1',
                    id        : 'confirmedAgreement'
                }]
            },
            {
                xtype: 'datefield',
                anchor: '100%',
                fieldLabel: 'Date',
                name: 'ConfirmationDate',
                format: 'd/m/Y',
                bind: {
                    value: '{ConfirmationDate}'
                }
            }
        ]
    },{
        title: 'Qualifications',
        html: 'Enter your qualifications here!'
    },{
        title: 'Experience',
        html: 'Enter your experience here!'
    },{
        title: 'References',
        html: 'Enter your references here!'
    },{
        title: 'Personal Statement',
        html: 'Enter your personal statement here!'
    },{
        title: 'Declaration',
        html: 'Enter your declaration here!'
    }]
});
