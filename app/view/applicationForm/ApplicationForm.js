Ext.define("LinkExPortal.view.applicationForm.ApplicationForm",{
    extend: "Ext.form.Panel",
    requires: [
        'LinkExPortal.view.applicationForm.ApplicationFormController',
        'LinkExPortal.view.applicationForm.ApplicationFormModel',
        'LinkExPortal.view.qualifications.Qualifications',
        'LinkExPortal.view.experience.Experience',
        'LinkExPortal.view.references.References'
    ],
    alias: 'widget.applicationForm',
    controller: "applicationform-applicationform",
    viewModel: {
        type: "applicationform-applicationform"
    },
    title: 'Application for course',
    defaults: {
        // applied to each contained panel
        bodyStyle: 'padding:15px',
        autoScroll: true
    },
    layout: {
        type: 'card', //'accordion',
        titleCollapse: false
    },
    store: 'applicationForm',
    items: [
        {
            title: 'Personal Details',
            items: [
                {
                    xtype: 'combobox',
                    id: 'fldTitleID',
                    fieldLabel: 'Title',
                    queryMode: 'local',
                    forceSelection: true,
                    displayField: 'Description',
                    valueField: 'ListItemID',
                    name: 'Title',
                    bind: {
                        store: '{titleList}',
                        value: '{currentRecord.TitleID}'
                    }
                },
                {
                    xtype: 'textfield',
                    id: 'fldLastname',
                    name: 'Surname',
                    fieldLabel: 'Surname',
                    allowBlank: false,
                    bind: {
                        value: '{currentRecord.Lastname}'
                    }
                },
                {
                    xtype: 'textfield',
                    id: 'fldFirstname',
                    name: 'Forename',
                    fieldLabel: 'Forename(s)',
                    allowBlank: false,
                    bind: {
                        value: '{currentRecord.Firstname}'
                    }
                },
                {
                    xtype: 'textfield',
                    id: 'fldEmail',
                    name: 'Email',
                    fieldLabel: 'Email',
                    allowBlank: false,
                    bind: {
                        value: '{currentRecord.Email}'
                    }
                },
                {
                    xtype: 'textfield',
                    id: 'fldMobileNumber',
                    name: 'Mobile',
                    fieldLabel: 'Mobile',
                    allowBlank: true,
                    bind: {
                        value: '{currentRecord.MobileNumber}'
                    }
                },
                {
                    xtype: 'textfield',
                    id: 'fldPreviousSurname',
                    name: 'PreviousSurname',
                    fieldLabel: 'Previous Surname',
                    allowBlank: true,
                    bind: {
                        value: '{currentRecord.PreviousSurname}'
                    }
                },
                {
                    xtype: 'textfield',
                    id: 'fldKnownAs',
                    name: 'KnownAs',
                    fieldLabel: 'Known as',
                    allowBlank: true,
                    bind: {
                        value: '{currentRecord.KnownAs}'
                    }
                },
                {
                    xtype: 'datefield',
                    id: 'fldDOB',
                    anchor: '100%',
                    fieldLabel: 'DOB',
                    name: 'DOB',
                    format: 'd m Y',
                    maxValue: new Date(),  //Today or earlier.
                    submitFormat: 'd m Y',
                    bind: {
                        value: '{currentRecord.DOB}'
                    }
                }
            ],
            bbar: {
                items: [
                    {
                        xtype: 'button',
                        text: 'Save and continue',
                        listeners: {
                            click: 'onSaveClicked'
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Submit',
                        formBind: true,
                        listeners: {
                            click: 'onSubmit'
                        }
                    },
                    {
                        xtype: 'textfield',
                        bind: {
                            value: '{currentRecord.id}'
                        }
                    }
                ]
            }
        },
        {
            title: 'Other information',
            items: [
                {
                    xtype: 'textfield',
                    id: 'fldNationality',
                    name: 'Nationality',
                    fieldLabel: 'Nationality',
                    allowBlank: true,
                    bind: {
                        value: '{currentRecord.Nationality}'
                    }
                },
                {
                    xtype: 'combobox',
                    id: 'fldCountryOfBirthID',
                    fieldLabel: 'Country of Birth',
                    queryMode: 'local',
                    forceSelection: true,
                    displayField: 'Description',
                    valueField: 'ListItemID',
                    name: 'CountryOfBirth',
                    bind: {
                        store: '{countryList}',
                        value: '{currentRecord.CountryOfBirthID}'
                    }
                },
                {
                    xtype: 'combobox',
                    id: 'fldGenderID',
                    fieldLabel: 'Gender',
                    queryMode: 'local',
                    editable: false,
                    displayField: 'Description',
                    valueField: 'ListItemID',
                    name: 'Gender',
                    bind: {
                        store: '{gendersList}',
                        value: '{currentRecord.GenderID}'
                    }
                },
                {
                    xtype: 'combobox',
                    id: 'fldEthnicityID',
                    fieldLabel: 'Ethnicity',
                    queryMode: 'local',
                    displayField: 'Description',
                    valueField: 'ListItemID',
                    name: 'Ethnicity',
                    forceSelection: true,
                    bind: {
                        store: '{ethnicityList}',
                        value: '{currentRecord.EthnicityID}'
                    }
                }
            ],
            bbar: {
                items: [
                    {
                        xtype: 'button',
                        text: 'Back',
                        listeners: {
                            click: 'onBackClicked'
                        }
                    },{
                        xtype: 'button',
                        text: 'Save and continue',
                        listeners: {
                            click: 'onSaveClicked'
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Submit',
                        listeners: {
                            click: 'onSubmit'
                        }
                    }
                ]
            }
        },
        {
            title: 'Professional Body Details',
            items: [
                {
                    xtype: 'combobox',
                    id: 'fldProfessionalBodyID',
                    fieldLabel: 'Professional Body',
                    queryMode: 'local',
                    displayField: 'Description',
                    valueField: 'ListItemID',
                    forceSelection: true,
                    name: 'ProfessionalBody',
                    bind: {
                        store: '{professionalBodyList}',
                        value: '{currentRecord.ProfessionalBodyID}'
                    }
                },
                {
                    xtype: 'textfield',
                    id: 'fldMembershipNumber',
                    name: 'MembershipNumber',
                    fieldLabel: 'Membership Number',
                    allowBlank: true,
                    bind: {
                        value: '{MembershipNumber}'/*,
                        hidden: '{currentRecord.ProfessionalBodyID} <= 0'*/
                    }
                },
                {
                    xtype: 'datefield',
                    id: 'fldMembershipExpiry',
                    anchor: '100%',
                    fieldLabel: 'Expiry Date',
                    name: 'MembershipExpiry',
                    format: 'd/m/Y',
                    minValue: new Date(),  //Today or earlier.
                    bind: {
                        value: '{MembershipExpiry}'/*,
                        hidden: '{currentRecord.ProfessionalBodyID} > 0'*/
                    }
                }
            ],
            bbar: {
                items: [
                    {
                        xtype: 'button',
                        text: 'Back',
                        listeners: {
                            click: 'onBackClicked'
                        }
                    },{
                        xtype: 'button',
                        text: 'Save and continue',
                        listeners: {
                            click: 'onSaveClicked'
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Submit',
                        formBind: true,
                        listeners: {
                            click: 'onSubmit'
                        }
                    }
                ]
            }
        },
        {
            title: 'Home details',
            items: [
            {
                xtype: 'textfield',
                id: 'fldHomeAddress1',
                name: 'HomeAddress1',
                fieldLabel: 'Address',
                allowBlank: false,
                bind: {
                    value: '{currentRecord.HomeAddress1}'
                }
            },
            {
                xtype: 'textfield',
                id: 'fldHomeAddress2',
                name: 'HomeAddress2',
                fieldLabel: ' ',
                allowBlank: true,
                bind: {
                    value: '{currentRecord.HomeAddress2}'
                }
            },
            {
                xtype: 'textfield',
                id: 'fldHomeCity',
                name: 'HomeCity',
                fieldLabel: 'City',
                allowBlank: false,
                bind: {
                    value: '{currentRecord.HomeCity}'
                }
            },
            {
                xtype: 'textfield',
                id: 'fldHomePostCode',
                name: 'HomePostcode',
                fieldLabel: 'Postcode',
                allowBlank: false,
                bind: {
                    value: '{currentRecord.HomePostCode}'
                }
            },
            {
                xtype: 'combobox',
                id: 'fldHomeCountryID',
                fieldLabel: 'Country',
                queryMode: 'local',
                displayField: 'Description',
                valueField: 'ListItemID',
                name: 'HomeCountry',
                forceSelection: true,
                bind: {
                    store: '{countryList}',
                    value: '{currentRecord.HomeCountryID}'
                }
            },
            {
                xtype: 'textfield',
                id: 'fldTelephone',
                name: 'Telephone',
                fieldLabel: 'Telephone',
                allowBlank: true,
                bind: {
                    value: '{currentRecord.Telephone}'
                }
            }
        ],
            bbar: {
                items: [
                    {
                        xtype: 'button',
                        text: 'Back',
                        listeners: {
                            click: 'onBackClicked'
                        }
                    },{
                        xtype: 'button',
                        text: 'Save and continue',
                        listeners: {
                            click: 'onSaveClicked'
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Submit',
                        formBind: true,
                        listeners: {
                            click: 'onSubmit'
                        }
                    }
                ]
            }
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
                id: 'fldWorkAddress1',
                name: 'WorkAddress1',
                fieldLabel: 'Address',
                allowBlank: true,
                bind: {
                    value: '{currentRecord.WorkAddress1}'
                }
            },
            {
                xtype: 'textfield',
                id: 'fldWorkAddress2',
                name: 'WorkAddress2',
                fieldLabel: ' ',
                allowBlank: true,
                bind: {
                    value: '{currentRecord.WorkAddress2}'
                }
            },
            {
                xtype: 'textfield',
                id: 'fldWorkCity',
                name: 'WorkCity',
                fieldLabel: 'City',
                allowBlank: true,
                bind: {
                    value: '{currentRecord.WorkCity}'
                }
            },
            {
                xtype: 'textfield',
                id: 'fldWorkPostcode',
                name: 'WorkPostcode',
                fieldLabel: 'Postcode',
                allowBlank: true,
                bind: {
                    value: '{currentRecord.WorkPostcode}'
                }
            },
            {
                xtype: 'combobox',
                id: 'fldWorkCountryID',
                fieldLabel: 'Country',
                queryMode: 'local',
                displayField: 'Description',
                valueField: 'ListItemID',
                forceSelection: true,
                name: 'WorkCountry',
                bind: {
                    store: '{countryList}',
                    value: '{currentRecord.WorkCountryID}'
                }
            },
            {
                xtype: 'textfield',
                id: 'fldWorkEmail',
                name: 'WorkEmail',
                fieldLabel: 'Email',
                allowBlank: true,
                bind: {
                    value: '{currentRecord.WorkEmail}'
                }
            },
            {
                xtype: 'textfield',
                id: 'fldWardDept',
                name: 'WardDept',
                fieldLabel: 'Ward/Dept',
                allowBlank: true,
                bind: {
                    value: '{currentRecord.WardDept}'
                }
            }
        ],
        bbar: {
            items: [
                {
                    xtype: 'button',
                    text: 'Back',
                    listeners: {
                        click: 'onBackClicked'
                    }
                },{
                    xtype: 'button',
                    text: 'Save and continue',
                    listeners: {
                        click: 'onSaveClicked'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Submit',
                    formBind: true,
                    listeners: {
                        click: 'onSubmit'
                    }
                }
            ]
        }
    },{
        title: 'Eligibility',
        items: [
            {
                xtype: 'combobox',
                id: 'fldCountryOfResidenceID',
                fieldLabel: 'Country Of Residence',
                queryMode: 'local',
                displayField: 'Description',
                valueField: 'ListItemID',
                forceSelection: true,
                name: 'WorkCountry',
                bind: {
                    store: '{countryList}',
                    value: '{currentRecord.CountryOfResidenceID}'
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
                        text: 'Have you been granted permanent residence in the EU / Indefinite leave to remain in the UK?',
                        forId: 'fldIsPermanentResident',
                        margin: '0 0 0 10'
                    },
                    {
                        xtype: 'checkbox',
                        id: 'fldIsPermanentResident',
                        bind: {
                            value: '{currentRecord.IsPermanentResident}'
                        }
                    }
                ],
                bbar: {
                    items: [
                        {
                            xtype: 'button',
                            text: 'Back',
                            listeners: {
                                click: 'onBackClicked'
                            }
                        },{
                            xtype: 'button',
                            text: 'Save and continue',
                            listeners: {
                                click: 'onSaveClicked'
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Submit',
                            formBind: true,
                            listeners: {
                                click: 'onSubmit'
                            }
                        }
                    ]
                }
            }
        ]
     },{
        title: 'Qualifications',
        items: [
            {
                xtype: 'qualifications'
            }
        ],
            bbar: {
                items: [
                    {
                        xtype: 'button',
                        text: 'Back',
                        listeners: {
                            click: 'onBackClicked'
                        }
                    },{
                        xtype: 'button',
                        text: 'Save and continue',
                        listeners: {
                            click: 'onSaveClicked'
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Submit',
                        formBind: true,
                        listeners: {
                            click: 'onSubmit'
                        }
                    }
                ]
            }
    },{
        title: 'Experience',
        items: [
            {
                xtype: 'experience'
            }
        ],
            bbar: {
                items: [
                    {
                        xtype: 'button',
                        text: 'Back',
                        listeners: {
                            click: 'onBackClicked'
                        }
                    },{
                        xtype: 'button',
                        text: 'Save and continue',
                        listeners: {
                            click: 'onSaveClicked'
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Submit',
                        formBind: true,
                        listeners: {
                            click: 'onSubmit'
                        }
                    }
                ]
            }
    },{
        title: 'References',
        items: [
            {
                xtype: 'references'
            }
        ],
            bbar: {
                items: [
                    {
                        xtype: 'button',
                        text: 'Back',
                        listeners: {
                            click: 'onBackClicked'
                        }
                    },{
                        xtype: 'button',
                        text: 'Save and continue',
                        listeners: {
                            click: 'onSaveClicked'
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Submit',
                        formBind: true,
                        listeners: {
                            click: 'onSubmit'
                        }
                    }
                ]
            }
    },{
        title: 'Personal Statement',
        items: [
            {
                html: '<p><strong>Please give your reasons for choosing this particular programme of study.</strong></p><p><i>You may wish to alter this section according to which programme of study you are applying for.</i></p>'
            },
            {
                xtype: 'textarea',
                id: 'fldPersonalStatement',
                name: 'PersonalStatement',
                fieldLabel: 'Personal Statement',
                height: 200,
                allowBlank: true,
                emptyText: 'Personal statement...',
                bind: {
                    value: '{currentRecord.PersonalStatement}'
                }
            }
        ],
            bbar: {
                items: [
                    {
                        xtype: 'button',
                        text: 'Back',
                        listeners: {
                            click: 'onBackClicked'
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Save and continue',
                        listeners: {
                            click: 'onSaveClicked'
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Submit',
                        formBind: true,
                        listeners: {
                            click: 'onSubmit'
                        }
                    }
                ]
            }
    },{
        title: 'Declaration',
        items: [
            {
                xtype: 'label',
                text: 'Because of the nature of the programmes for which you are applying, they are exempt from the provision of Section 4 (2) of the Rehabilitation of Offenders Act 1974. By virtue of the Rehabilitation of Offenders Act 1974 (Exemptions) Order 1975 and the Children Act 1989, applicants are, therefore, not entitled to withhold information about convictions which for other purposes are "spent" under the provisions of the Act.'
            },
            {
                xtype: 'label',
                text: 'As you are applying for a programme in health or social work which may involve children or vulnerable adults, you must tell us about any criminal convictions, including spent sentences and cautions (including verbal cautions) and bind-over orders.'
            },
            {
                xtype: 'datefield',
                id: 'fldDateOfFirstEntryToUK',
                anchor: '100%',
                fieldLabel: 'Date of First Entry to UK',
                name: 'DateOfFirstEntryToUK',
                format: 'd/m/Y',
                maxValue: new Date(),  //Today or earlier.
                bind: {
                    value: '{currentRecord.DateOfFirstEntryToUK}'
                }
            },
            {
                xtype: 'datefield',
                id: 'fldDateOfGrantedResidency',
                anchor: '100%',
                fieldLabel: 'Date residency was granted',
                name: 'DateOfGrantedResidency',
                format: 'd/m/Y',
                maxValue: new Date(),  //Today or earlier.
                bind: {
                    value: '{currentRecord.DateOfGrantedResidency}'
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
                        xtype: 'checkbox',
                        id: 'fldHasCriminalConviction',
                        bind: {
                            value: '{currentRecord.HasCriminalConviction}'
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
                    },
                    {
                        xtype: 'checkbox',
                        id: 'fldHasCaution',
                        bind: {
                            value: '{currentRecord.HasCaution}'
                        }
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
                        forId: 'fldHasSpentCriminalConviction',
                        margin: '0 0 0 10'
                    },
                    {
                        xtype: 'checkbox',
                        id: 'fldHasSpentCriminalConviction',
                        bind: {
                            value: '{currentRecord.HasSpentCriminalConviction}'
                        }
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
                        forId: 'HasBindOverOrder',
                        margin: '0 0 0 10'
                    },
                    {
                        xtype: 'checkbox',
                        id: 'fldHasBindOverOrder',
                        bind: {
                            value: '{currentRecord.HasBindOverOrder}'
                        }
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
                        xtype: 'checkbox',
                        id: 'fldIsCRBChecked',
                        bind: {
                            value: '{currentRecord.IsCRBChecked}'
                        }
                    }
                ]
            },
            {
                xtype: 'datefield',
                id: 'fldCRBCheckDate',
                anchor: '100%',
                fieldLabel: 'Date of Check',
                name: 'CRBCheckDate',
                format: 'd/m/Y',
                maxValue: new Date(),  //Today or earlier.
                bind: {
                    value: '{currentRecord.CRBCheckDate}'
                }
            },
            {
                xtype: 'textfield',
                id: 'fldCRBCheckRefNo',
                name: 'CRBCheckRefNo',
                fieldLabel: 'CRB Reference No',
                allowBlank: true,
                bind: {
                    value: '{currentRecord.CRBCheckRefNo}'
                }
            },
            {
                xtype: 'fieldcontainer',
                fieldLabel: ' ',
                defaultType: 'checkboxfield',
                items: [{
                    boxLabel  : 'I agree to the above declararation',
                    name      : 'ConfirmedAgreement',
                    inputValue: '1',
                    id        : 'fldConfirmedAgreement'
                }]
            },
            {
                xtype: 'datefield',
                id: 'fldConfirmationDate',
                anchor: '100%',
                fieldLabel: 'Date',
                name: 'ConfirmationDate',
                format: 'd/m/Y',
                bind: {
                    value: '{currentRecord.ConfirmationDate}'
                }
            },
            {
                xtype: 'label',
                id: 'fldAccountID',
                bind: {
                    text: '{currentRecord.AccountID}'
                }
            }
        ],
            bbar: {
                items: [
                    {
                        xtype: 'button',
                        text: 'Back',
                        listeners: {
                            click: 'onBackClicked'
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Save',
                        listeners: {
                            click: 'onSaveClicked'
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Submit',
                        formBind: true,
                        listeners: {
                            click: 'onSubmit'
                        }
                    }
                ]
            }
    }]
});
