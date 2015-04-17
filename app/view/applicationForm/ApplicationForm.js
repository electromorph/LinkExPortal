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
                    name: 'Surname',
                    fieldLabel: 'Surname',
                    allowBlank: false,
                    bind: {
                        value: '{currentRecord.Lastname}'
                    }
                },
                {
                    xtype: 'textfield',
                    name: 'Forename',
                    fieldLabel: 'Forename(s)',
                    allowBlank: false,
                    bind: {
                        value: '{currentRecord.Firstname}'
                    }
                },
                {
                    xtype: 'textfield',
                    name: 'Email',
                    fieldLabel: 'Email',
                    allowBlank: false,
                    bind: {
                        value: '{currentRecord.Email}'
                    }
                },
                {
                    xtype: 'textfield',
                    name: 'Mobile',
                    fieldLabel: 'Mobile',
                    allowBlank: true,
                    bind: {
                        value: '{currentRecord.MobileNumber}'
                    }
                },
                {
                    xtype: 'textfield',
                    name: 'PreviousSurname',
                    fieldLabel: 'Previous Surname',
                    allowBlank: true,
                    bind: {
                        value: '{currentRecord.PreviousSurname}'
                    }
                },
                {
                    xtype: 'textfield',
                    name: 'KnownAs',
                    fieldLabel: 'Known as',
                    allowBlank: true,
                    bind: {
                        value: '{currentRecord.KnownAs}'
                    }
                },
                {
                    xtype: 'datefield',
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
                    }
                ]
            }
        },
        {
            title: 'Other information',
            items: [
                {
                    xtype: 'textfield',
                    name: 'Nationality',
                    fieldLabel: 'Nationality',
                    allowBlank: true,
                    bind: {
                        value: '{currentRecord.Nationality}'
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
                        value: '{currentRecord.CountryOfBirthID}'
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
                        value: '{currentRecord.GenderID}'
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
                    name: 'MembershipNumber',
                    fieldLabel: 'Membership Number',
                    allowBlank: true,
                    bind: {
                        value: '{MembershipNumber}',
                        hidden: '{currentRecord.ProfessionalBodyID} <= 0'
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
                        hidden: '{currentRecord.ProfessionalBodyID} > 0'
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
                name: 'HomeAddress1',
                fieldLabel: 'Address',
                allowBlank: false,
                bind: {
                    value: '{currentRecord.HomeAddress1}'
                }
            },
            {
                xtype: 'textfield',
                name: 'HomeAddress2',
                fieldLabel: ' ',
                allowBlank: true,
                bind: {
                    value: '{currentRecord.HomeAddress2}'
                }
            },
            {
                xtype: 'textfield',
                name: 'HomeCity',
                fieldLabel: 'City',
                allowBlank: false,
                bind: {
                    value: '{currentRecord.HomeCity}'
                }
            },
            {
                xtype: 'textfield',
                name: 'HomePostcode',
                fieldLabel: 'Postcode',
                allowBlank: false,
                bind: {
                    value: '{currentRecord.HomePostCode}'
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
                    value: '{currentRecord.HomeCountryID}'
                }
            },
            {
                xtype: 'textfield',
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
                name: 'WorkAddress1',
                fieldLabel: 'Address',
                allowBlank: true,
                bind: {
                    value: '{currentRecord.WorkAddress1}'
                }
            },
            {
                xtype: 'textfield',
                name: 'WorkAddress2',
                fieldLabel: ' ',
                allowBlank: true,
                bind: {
                    value: '{currentRecord.WorkAddress2}'
                }
            },
            {
                xtype: 'textfield',
                name: 'WorkCity',
                fieldLabel: 'City',
                allowBlank: true,
                bind: {
                    value: '{currentRecord.WorkCity}'
                }
            },
            {
                xtype: 'textfield',
                name: 'WorkPostcode',
                fieldLabel: 'Postcode',
                allowBlank: true,
                bind: {
                    value: '{currentRecord.WorkPostcode}'
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
                    value: '{currentRecord.WorkCountryID}'
                }
            },
            {
                xtype: 'textfield',
                name: 'WorkEmail',
                fieldLabel: 'Email',
                allowBlank: true,
                bind: {
                    value: '{currentRecord.WorkEmail}'
                }
            },
            {
                xtype: 'textfield',
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
                    },
                    {
                        xtype: 'checkbox',
                        bind: {
                            value: '{currentRecord.IsPermanentResident}'
                        }
                    }
                    /*{
                        xtype: 'segmentedbutton',
                        bind: {
                            value: '{currentRecord.IsPermanentResident}'
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
                    }*/
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
                xtype: 'datefield',
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
                anchor: '100%',
                fieldLabel: 'Date residency was granted',
                name: 'DateOfGrantedResidency',
                format: 'd/m/Y',
                maxValue: new Date(),  //Today or earlier.
                bind: {
                    value: '{currentRecord.MembershipExpiry}'
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
                        bind: {
                            value: '{currentRecord.HasCriminalConviction}'
                        }
                    }
                    /*{
                        xtype: 'segmentedbutton',
                        bind: {
                            value: '{currentRecord.HasCriminalConviction}'
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
                    }*/
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
                    },
                    {
                        xtype: 'checkbox',
                        bind: {
                            value: '{currentRecord.hasCaution}'
                        }
                    }
                    /*{
                        xtype: 'segmentedbutton',
                        bind: {
                            value: '{currentRecord.HasCaution}'
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
                    }*/
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
                        xtype: 'checkbox',
                        bind: {
                            value: '{currentRecord.hasSpentCriminalConviction}'
                        }
                    }
                    /*{
                        xtype: 'segmentedbutton',
                        bind: {
                            value: '{currentRecord.HasSpentCriminalConviction}'
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
                    }*/
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

                    },
                    {
                        xtype: 'checkbox',
                        bind: {
                            value: '{currentRecord.hasBindOverOrder}'
                        }
                    }
                    /*{
                        xtype: 'segmentedbutton',
                        bind: {
                            value: '{currentRecord.HasBindOverOrder}'
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
                    }*/
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
                        bind: {
                            value: '{currentRecord.IsCRBChecked}'
                        }
                    }
                    /*{
                        xtype: 'segmentedbutton',
                        id: 'isCRBChecked',
                        bind: {
                            value: '{currentRecord.IsCRBChecked}'
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
                    }*/
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
                    value: '{currentRecord.CRBCheckDate}'
                }
            },
            {
                xtype: 'textfield',
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
                    value: '{currentRecord.ConfirmationDate}'
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
                xtype: 'textfield',
                name: 'PersonalStatement',
                fieldLabel: 'Personal Statement',
                allowBlank: true,
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
