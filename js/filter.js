const filterButton = document.getElementsByClassName("filter-button")
const filterMenuOverlay = document.getElementById("filter-menu__overlay")

function showFilterMenu () {
    console.log('Show filter menu')
    filterMenuOverlay.style.display = 'block';
}

function hideFilterMenu() {
    console.log('Hide filter menu')
    filterMenuOverlay.style.display = "none";
}

