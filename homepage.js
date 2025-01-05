
function scrollCarousel(amount) {
    const carousel = document.getElementById('carousel');
    carousel.scrollBy({ left: amount, behavior: 'smooth' });
}
 
$(document).ready(function () {
    // Data for autocomplete
    const suggestions = [
        "Cendol Biasa",
        "Cendol Kacang",
        "Cendol Cincau",
        "Cendol Pulut",
        "Cendol Jagung",
        "Cendol Mangga",
        "Add On",
        "Ais Kepal Myvic",
        "Lay Chee Kang",
        "ABC",
        "Laksa Biasa",
        "Laksa Telur Sarang",
        "Bihun Sup Biasa",
        "Bihun Sup Meatball",
        "Mee Kari Biasa",
        "Mee Kari Ayam",
        "Mee Kari Kerang"
    ];

    // jQuery UI autocomplete
    $("#searchBar").autocomplete({
        source: suggestions
    });
});