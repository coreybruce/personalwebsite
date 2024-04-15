function searchAndShowDiv() {
    // Get the id from the search box
    var id = document.getElementById('searchBox').value;

    // Get all divs
    var divs = document.getElementsByClassName('flex-appbox app-panels');

    // Hide all divs
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }

    // Get the div by id
    var div = document.getElementById(id);

    // Check if the div exists
    if (div) {
        // If the div exists, display it
        div.style.display = 'block';
    } else {
        // If the div doesn't exist, log an error message
        console.error('No div found with id: ' + id);
    }
}
