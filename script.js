document.addEventListener('DOMContentLoaded', () => {
    loadTimelineContent();
});

function loadTimelineContent() {
    fetch('timeline.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('timeline-content').innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem with fetching the timeline content:', error);
        });
}

function addEvent() {
    // Example function to handle adding events dynamically
    console.log('Add more events button clicked');
}
