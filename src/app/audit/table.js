$(".example").fancyTable({
    sortColumn:0, // column number for initial sorting
    sortOrder: 'descending', // 'desc', 'descending', 'asc', 'ascending', -1 (descending) and 1 (ascending)
    sortable: true,
    pagination: true, // default: false
    searchable: true,
    globalSearch: true,
    globalSearchExcludeColumns: [2,5] // exclude column 2 & 5
  });

  $(".example").fancyTable({
    pagination: false,
    paginationClass: "btn btn-light",
    paginationClassActive: "active",
    pagClosest: 3,
    perPage: 10,
  });

  $(".example").fancyTable({
    onInit: function(){ 
      // do something
    },
  });