async function deleteHotel(url, hotelId) {
    let confirmation = confirm('Are you sure you want to continue?');
    if (confirmation) {
        console.log(url, hotelId);
        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    id: hotelId
                })
            });
            if (!response.ok) {
                throw new Error('Failed to delete hotel: ' + response.statusText);
            }
            const resData = await response.text();
            console.log(resData); // Log the response if needed
            location.reload(); // Reload the page after successful deletion
        } catch (error) {
            console.error('Error deleting hotel:', error.message);
            alert('Failed to delete hotel: ' + error.message);
        }
    } else {
        // If the user cancels, do nothing
        return;
    }
}