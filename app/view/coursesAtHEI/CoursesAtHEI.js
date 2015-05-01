Ext.define("LinkExPortal.view.coursesAtHEI.CoursesAtHEI",{
    extend: "Ext.grid.Panel",
    requires: [
        'LinkExPortal.view.coursesAtHEI.CoursesAtHEIController',
        'LinkExPortal.view.coursesAtHEI.CoursesAtHEIModel'
    ],
    alias: 'widget.coursesathei',

    controller: "coursesathei-coursesathei",
    viewModel: {
        type: "coursesathei-coursesathei"
    },

    html: "Hello, World!!"
});
