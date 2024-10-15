// Define the fest data for different cities
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
        { event: 'Electric Heels', date: '3nd Feb' },
        { event: 'Electric Heels', date: '3nd Feb' },
        { event: 'So You Think You Can Dance', date: '4rd Feb' },
        { event: 'So You Think You Can Dance', date: '4rd Feb' },
        { event: 'This is POP', date: '5rd Feb' },
        { event: 'This is POP', date: '5rd Feb' },
        { event: 'Sa Re Ga Ma', date: '5rd Feb' },
        { event: 'Sa Re Ga Ma', date: '5rd Feb' },
    ],
    chennai: [
        { event: 'Electric Heels', date: '6nd Feb' },
        { event: 'Electric Heels', date: '6nd Feb' },
        { event: 'So You Think You Can Dance', date: '7rd Feb' },
        { event: 'So You Think You Can Dance', date: '7rd Feb' },
        { event: 'This is POP', date: '8rd Feb' },
        { event: 'This is POP', date: '8rd Feb' },
        { event: 'Sa Re Ga Ma', date: '8rd Feb' },
        { event: 'Sa Re Ga Ma', date: '8rd Feb' },
    ]
};

// Function to update fest data based on dropdown selection
function updateFestData() {
    const city = document.getElementById('city-select').value;
    const grid = document.getElementById('fest-grid');
    
    // Clear the previous grid content
    grid.innerHTML = '';

    // Get the relevant fest data
    const data = festData[city];

    // Populate the grid with new data
    data.forEach(item => {
        const eventDiv = document.createElement('div');
        const dateDiv = document.createElement('div');
        eventDiv.textContent = item.event;
        dateDiv.textContent = item.date;
        grid.appendChild(eventDiv);
        grid.appendChild(dateDiv);
    });
}

// Initial load
document.addEventListener('DOMContentLoaded', updateFestData);
