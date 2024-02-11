// Get Input Element
let filterInput = document.getElementById('filterInput');

// Add Event Listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    // Get value of Input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    // Get ul names
    let ul = document.getElementById('names');

    // Get li's from ul
    let li = document.querySelectorAll('li.collection-item'); // returns an array of data
    console.log(li)

    // Loop through collection item's li's
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        // if matches
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}