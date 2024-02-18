// Adding an event listener to the "Reserve Car" button
document.getElementById('reserveButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    reserveCar();
});

function reserveCar() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var reservationDateTime = document.getElementById('reservationDateTime').value;
    var creditCardNumber = document.getElementById('creditCardNumber').value;
    var expiryDate = document.getElementById('expiryDate').value;
    var cvv = document.getElementById('cvv').value;
    var rentalPackage = document.getElementById('rentalPackage').value;
    var carPark = document.getElementById('carPark').value;

    if (name.trim() === '' || email.trim() === '' || phoneNumber.trim() === '' || reservationDateTime.trim() === '' || creditCardNumber.trim() === '' || expiryDate.trim() === '' || cvv.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Assuming validation passed, you can send the reservation details to the server for processing
    // Here, we're simulating a successful reservation
    var confirmation = confirm('Your Reservation has completed successfully, ' + name + '!');

    // Check user's choice
    if (confirmation) {
        // If user confirms, redirect to confirmation.html
        window.location.href = "confirmation.html";
    }

 // Construct the URL with parameters
 var redirectUrl = "confirmation.html?";
 redirectUrl += "name=" + encodeURIComponent(name) + "&";
 redirectUrl += "email=" + encodeURIComponent(email) + "&";
 redirectUrl += "phoneNumber=" + encodeURIComponent(phoneNumber) + "&";
 redirectUrl += "reservationDateTime=" + encodeURIComponent(reservationDateTime) + "&";
 redirectUrl += "creditCardNumber=" + encodeURIComponent(creditCardNumber) + "&";
 redirectUrl += "rentalPackage=" + encodeURIComponent(rentalPackage) + "&";
 redirectUrl += "carPark=" + encodeURIComponent(carPark);

 // Redirect to the confirmation page with rental details
 window.location.href = redirectUrl;
}

// Function to format date
function formatDate(dateString) {
    // Convert date string to a Date object
    var date = new Date(dateString);
  
    // Format the date and time
    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    return date.toLocaleDateString('en-US', options);
}

// Function to mask CVV input
document.getElementById('cvv').addEventListener('input', function() {
    this.value = this.value.replace(/[^\d]/g, '').replace(/(\d{3})\d*/, '***');
});