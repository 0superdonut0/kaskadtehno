// (function(){
//     emailjs.init("YOUR_EMAILJS_USER_ID"); // Replace with your EmailJS user ID
// })();

// function sendEmail() {
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
//     const message = document.getElementById('message').value;
//     const consent = document.getElementById('consent').checked;
//     const errorElem = document.getElementById('error');

//     errorElem.textContent = ''; // Clear previous errors

//     if (!email.includes('@') || !email.includes('.')) {
//         errorElem.textContent = 'Please enter a valid email address.';
//         return;
//     }

//     if (phone.length < 11) {
//         errorElem.textContent = 'Phone number must be at least 11 characters long.';
//         return;
//     }

//     if (message.trim() === '') {
//         errorElem.textContent = 'Message cannot be empty.';
//         return;
//     }

//     if (!consent) {
//         errorElem.textContent = 'You must agree to the terms and conditions.';
//         return;
//     }

//     const templateParams = {
//         email: email,
//         phone: phone,
//         message: message
//     };

//     emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
//         .then((response) => {
//             alert('Email sent successfully!');
//         }, (error) => {
//             alert('Failed to send email. Please try again later.');
//         });
// }
var prevScrollPos = window.pageYOffset;
         window.onscroll = function(){
             var currentScrollPos = window.pageYOffset;
             var header = document.getElementById('header__title');
             if (header)
             if(prevScrollPos>currentScrollPos){
                 header.style.top = '76px';
                 header.style.transition = '0.3s';
             }
            else {
                 header.style.top = "-76px";
                 header.style.transition = '0.3s';
             }
            prevScrollPos = currentScrollPos;
         }