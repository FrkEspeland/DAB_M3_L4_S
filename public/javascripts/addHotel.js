async function addHotel(url) {
    let name = prompt("Provide the new hotel's name");
    // Check if the user canceled the name prompt
    if (name === null) {
        return; // Exit the function if the user cancels
    }
    let location = prompt("Provide the new hotel's location");
    // Check if the user canceled the location prompt
    if (location === null) {
        return; // Exit the function if the user cancels
    }
    // If both name and location are provided
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Name: name,
            Location: location,
        }),
    })
    .then((response) => {
        if (response.ok) {
            // Redirect to the hotels page
            window.location.href = '/hotels';
        } else {
            // Handle other response statuses if needed
            return response.json().then(data => {
                throw new Error(data.message || 'Failed to add hotel');
            });
        }
    })
    .catch((error) => {
        alert(error.message || 'Failed to add hotel');
    });
}


