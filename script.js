alert("This made by Shubham")


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }


contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Submit the form to Formspree
    fetch('https://formspree.io/f/xwkdjqpq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      
      // Hide the form and display the success message
      contactForm.style.display = 'none';
      document.getElementById('successMessage').style.display = 'block';
    })
    .catch((error) => {
      console.error('Error:', error);
      // You can handle the error response here (e.g., display an error message)
    });
  
    // Clear the form
    contactForm.reset();
  });
  