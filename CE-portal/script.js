// Ensure dropdown is hidden on page load


document.addEventListener('DOMContentLoaded', () => {
    const dropdownList = document.getElementById('dropdown-list');
    dropdownList.style.display = 'none'; 
    selectCity('Trichy');
});



// Fest data for each city

const festData = {
    trichy: [
        { event: 'Electric Heels', date: '2nd Feb' },
        { event: 'Electric Heels', date: '2nd Feb' },
        { event: 'So You Think You Can Dance', date: '3rd Feb' },
        { event: 'So You Think You Can Dance', date: '3rd Feb' },
        { event: 'This is POP', date: '3rd Feb' },
        { event: 'This is POP', date: '3rd Feb' },
        { event: 'Sa Re Ga Ma', date: '3rd Feb' },
        { event: 'Sa Re Ga Ma', date: '3rd Feb' },
    ],
    delhi: [
        { event: 'Electric Heels', date: '5th Feb' },
        { event: 'Electric Heels', date: '5th Feb' },
        { event: 'So You Think You Can Dance', date: '6th Feb' },
        { event: 'So You Think You Can Dance', date: '6th Feb' },
        { event: 'This is POP', date: '6th Feb' },
        { event: 'This is POP', date: '6th Feb' },
        { event: 'Sa Re Ga Ma', date: '7th Feb' },
        { event: 'Sa Re Ga Ma', date: '7th Feb' },
    ],
    chennai: [
        { event: 'Electric Heels', date: '10th Feb' },
        { event: 'Electric Heels', date: '10th Feb' },
        { event: 'So You Think You Can Dance', date: '11th Feb' },
        { event: 'So You Think You Can Dance', date: '11th Feb' },
        { event: 'This is POP', date: '11th Feb' },
        { event: 'This is POP', date: '11th Feb' },
        { event: 'Sa Re Ga Ma', date: '12th Feb' },
        { event: 'Sa Re Ga Ma', date: '12th Feb' },
    ]
};
// Toggle dropdown visibility
function toggleDropdown() {
    const dropdownList = document.getElementById('dropdown-list');
    if (dropdownList.style.display === 'block') {
        dropdownList.style.display = 'none';
    } else {
        dropdownList.style.display = 'block';
    }
}

// Dynamically update the dropdown list excluding the selected city
function updateDropdownList(selectedCity) {
    const dropdownList = document.getElementById('dropdown-list');
    dropdownList.innerHTML = ''; // Clear current dropdown list

    // Loop through all city names
    Object.keys(festData).forEach(city => {
        if (city !== selectedCity.toLowerCase()) {
            const cityItem = document.createElement('li');
            cityItem.textContent = city.charAt(0).toUpperCase() + city.slice(1); // Capitalize the first letter
            cityItem.onclick = () => selectCity(city.charAt(0).toUpperCase() + city.slice(1)); // Set click handler
            dropdownList.appendChild(cityItem);
        }
    });
}

// Update the grid with fest data for the selected city
function selectCity(city) {
    const selectedCity = document.getElementById('selected-city');
    selectedCity.textContent = city; // Change the dropdown header to the selected city
    
    const grid = document.getElementById('fest-grid');
    grid.innerHTML = ''; // Clear existing grid data

    const data = festData[city.toLowerCase()];
    data.forEach(item => {
        const eventDiv = document.createElement('div');
        const dateDiv = document.createElement('div');
        eventDiv.textContent = item.event;
        dateDiv.textContent = item.date;
        grid.appendChild(eventDiv);
        grid.appendChild(dateDiv);
    });

    // Update dropdown to exclude selected city
    updateDropdownList(city);

    // Close the dropdown after selecting
    toggleDropdown();
}

// Load default city (Trichy) data on page load
document.addEventListener('DOMContentLoaded', () => {
    selectCity('Trichy');
});
