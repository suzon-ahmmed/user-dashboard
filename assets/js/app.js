// @todo: Replace location after form submit
if (window.history.replaceState) {
   window.history.replaceState(null, null, window.location.href);
}

// @todo: Datatable init
$('.datatable').DataTable({
   responsive: true
});

$('#datatable-buttons').DataTable({
   lengthChange: false,
   responsive: true,
   buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
}).buttons().container().appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');

$('#custom-datatable').DataTable({
   lengthChange: false,
   responsive: true,
   buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
}).buttons().container().appendTo('#custom-datatable_wrapper .col-md-6:eq(0)');