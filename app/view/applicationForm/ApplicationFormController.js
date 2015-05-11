var active = 0;
Ext.define('LinkExPortal.view.applicationForm.ApplicationFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.applicationform-applicationform',
    rowEditing: Ext.create('Ext.grid.plugin.RowEditing', {
        clicksToEdit: 1
    }),
    init: function() {
        var myStore = this.getStore('applicationForm');
        if (LinkExPortal.global.Vars.applicationID.present) {
            myStore.on({ load: { fn: this.finishedLoading, scope: this, single: true } })
        }
        myStore.on({ write: { fn: this.storeWrite, scope:  this } });
        this.on({ gotRecord: { fn: this.onGotRecord, scope: this } });
        this.createNewRecordIfRequired();
        var applicationStore = Ext.StoreManager.lookup('allCourses');
        applicationStore.on({ load: { fn: this.getCourseNameFromCourseID, scope: this, single: true } })
    },
    getCourseNameFromCourseID: function(store) {
        //Populate name if an ID exists but no name.
        if (LinkExPortal.global.Vars.courseID.present && LinkExPortal.global.Vars.courseID.name == '') {
            if (store) {
                var myRecord = store.findRecord('CourseID', LinkExPortal.global.Vars.courseID.value);
                if (myRecord) {
                    var data = myRecord.getData();
                    LinkExPortal.global.Vars.courseID.name = data.CourseName;
                    this.getViewModel().set('CourseName', LinkExPortal.global.Vars.courseID.name);
                }
            }
        }
    },
    createNewRecordIfRequired: function() {
        //Checks if an application id was supplied. If it was, then no need for a new record.
        //Then checks if a courseid is present - if so, then create the application form - if not, don't.
        //Create form record and add it to the store, then set it as the ViewModel's currentRecord.
        if (!LinkExPortal.global.Vars.applicationRecordExists) {
            var myStore = this.getStore('applicationForm');
            if (LinkExPortal.global.Vars.courseID.present) {
                var newRecord = LinkExPortal.model.CPDHealthApplicationForm.create();
                LinkExPortal.global.Vars.applicationRecordExists = true;
                //Create new record in temp table.
                myStore.add(newRecord);
                var newRecords = myStore.getNewRecords();
                if (newRecords.length > 0) {
                    var myViewModel = this.getViewModel();
                    if (myViewModel) {
                        newRecords[0].phantom = true;
                        myViewModel.set('currentRecord', newRecords[0]);
                    }
                    var email = Ext.getCmp('fldEmail').getValue();
                }
            }
        }
    },
    //This is called from the store on load completion. It executes in a Store context, which is useless.
    //So we just use it to fire a new event that gets picked up by in controller context.
    finishedLoading: function(me, myViewModel, successful) {
            this.fireEvent('gotRecord');
    },

    storeWrite: function(me, operation) {
        var iRecord = operation.response.result.data;
        console.log(iRecord.id);
    },

    //This is the event we really want to run after the store has loaded.
    onGotRecord: function() {
        var myStore = this.getStore('applicationForm');
        if (myStore) {
            var myRecord = myStore.findRecord('CPDHealthApplicationFormTempID', LinkExPortal.global.Vars.applicationID.value);
            if (myRecord) {
                var myViewModel = this.getViewModel();
                if (myViewModel) {
                    myViewModel.set('currentRecord', myRecord);
                    LinkExPortal.global.Vars.applicationRecordExists = true;
                }
            }
            else {
                alert('Could not find the specified applicationid - strip out the duff applicationID from querystring and treat application as a new one...');
                LinkExPortal.global.Vars.applicationID = { value: -1, present: false};
            }
        }
    },
    onActivateQualificationsCard: function() {
        var qualificationsStore = this.getStore('studentQualifications');
        qualificationsStore.clearFilter(false);
        if (qualificationsStore) {
            qualificationsStore.addFilter({
                property: 'CPDHealthApplicationFormID',
                value: LinkExPortal.global.Vars.applicationID.value
            });
        }
    },
    onActivateExperienceCard: function() {
        var experienceStore = this.getStore('studentExperience');
        experienceStore.clearFilter(false);
        if (experienceStore) {
            experienceStore.addFilter({
                property: 'CPDHealthApplicationFormID',
                value: LinkExPortal.global.Vars.applicationID.value
            });
        }
    },
    onActivateReferencesCard: function() {
        var referencesStore = this.getStore('studentReferences');
        referencesStore.clearFilter(false);
        if (referencesStore) {
            referencesStore.addFilter({
                property: 'CPDHealthApplicationFormID',
                value: LinkExPortal.global.Vars.applicationID.value
            });
        }
    },
    onActivateCourseSessionCard: function() {
        var myViewModel = this.getViewModel();
        var currRecord, courseSessionId, courseID, data;
        if (myViewModel) {
            currRecord = myViewModel.get('currentRecord');
        }
        if (currRecord) {
            data = currRecord.getData();
            if (data) {
                courseSessionId = data.CourseSessionID;
            }
        }
        var sessionListStore = this.getStore('courseSessionList');
        if (sessionListStore) {
            sessionListStore.addFilter({
                property: 'CourseID',
                value: LinkExPortal.global.Vars.courseID.value
            });
        }
    },
    onSelectCourseSession: function(rowModel, record, index, eOpts) {
        var myViewModel = this.getViewModel();
        if (myViewModel) {
            var rec = myViewModel.get('currentRecord');
            rec.set('CourseSessionID', (record.get('CourseSessionID')).replace(/\D/g,''));
        }
    },
    saveCurrentRecord: function() {
        this.createNewRecordIfRequired();
        var myViewModel = this.getViewModel();
        var myRecord = myViewModel.get('currentRecord');
        if (myRecord) {
            myRecord.save();
            var applicationID = myRecord.getData().CPDHealthApplicationFormTempID;
            LinkExPortal.global.Vars.applicationID =  { value: applicationID, present: true };
        }
        else {
            alert('An error occurred whilst saving data');
        }
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
    onSaveQualificationsClicked: function() {
        var qualificationsStore = this.getStore('studentQualifications');
        qualificationsStore.commitChanges();
        var appForm = this.getView();
        var layout = appForm.getLayout();
        ++active;
        layout.setActiveItem(active);
    },
    onBackQualificationsClicked: function() {
        var qualificationsStore = this.getStore('studentQualifications');
        qualificationsStore.commitChanges();
        var appForm = this.getView();
        var layout = appForm.getLayout();
        --active;
        layout.setActiveItem(active);
    },
    onSubmit: function() {
        //Save current record
        this.saveCurrentRecord();
        Ext.Ajax.request({ url: 'http://localhost:26214/application/' + LinkExPortal.global.Vars.applicationID.value + '/submit',
            method: 'GET',
            //params: {param1:LinkExPortal.global.Vars.applicationID.value},
            success: function(responseObject){
                var obj = Ext.decode(responseObject.responseText);
                if (obj.SubmittedApplicationId == -1) {
                    Ext.Msg.alert('Status', 'Your application could not be submitted because ' + obj.Information + '.');
                } else {
                    LinkExPortal.global.Vars.applicationFormSubmitted = true;
                    location.href = "/LinkExPortal/ApplicationSubmitted.html";
                }
            },
            failure: function(responseObject){
                var obj = Ext.decode(responseObject.responseText);
                Ext.Msg.alert('Status', obj);
            }
        });
    }
});
