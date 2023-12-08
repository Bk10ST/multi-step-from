


const urlParams = new URLSearchParams(window.location.search);
const hotel = urlParams.get('hotels');
const noofroom = urlParams.get('noofroom');
const transportation = urlParams.get('transportation');
const activities = urlParams.getAll('activities[]');

const name = urlParams.get('name');
const contactNumber = urlParams.get('contact-number');
const destination = urlParams.get('destination');
const noofpeople = urlParams.get('noofpeople');


const reviewDataElement = document.getElementById('review-data');
reviewDataElement.innerHTML = `
  <p>Hotel: ${hotel}</p>
  <p>No. of Rooms: ${noofroom}</p>
  <p>Transportation: ${transportation}</p>
  <p>Activities: ${activities.join(', ')}</p>
`;

function openPopup() {
    // Show the popup and overlay
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    // Hide the popup and overlay
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}