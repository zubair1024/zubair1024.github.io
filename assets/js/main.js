(function ($) {
  $(function () {
    $(".button-collapse").sideNav();
    var data = [
      "Albania",
      "Andorra",
      "Armenia",
      "Austria",
      "Azerbaijan",
      "Belarus",
      "Belgium",
      "Bosnia & Herzegovina",
      "Bulgaria",
      "Croatia",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Estonia",
      "Finland",
      "France",
      "Georgia",
      "Germany",
      "Greece",
      "Hungary",
      "Iceland",
      "Ireland",
      "Italy",
      "Kosovo",
      "Latvia",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macedonia",
      "Malta",
      "Moldova",
      "Monaco",
      "Montenegro",
      "Netherlands",
      "Norway",
      "Poland",
      "Portugal",
      "Romania",
      "Russia",
      "San Marino",
      "Serbia",
      "Slovakia",
      "Slovenia",
      "Spain",
      "Sweden",
      "Switzerland",
      "Turkey",
      "Ukraine",
      "United Kingdom",
      "Vatican City"
    ];

    //create AutoComplete UI component
    $("#countries").kendoAutoComplete({
      dataSource: window.store.posts,
      dataTextField: 'title',
      ignoreCase: false,
      filter: 'contains',
      minLength: 3,
      placeholder: 'Search...',
      select: function (e) {
        console.log(e);
        if (e.dataItem.url) {
          window.location.pathname = e.dataItem.url;
        }
      }
    });
  });
})(jQuery);