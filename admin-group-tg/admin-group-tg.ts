// const elForm = document.querySelector('#form');

// elForm?.addEventListener('submit', (e) => {
//     e.preventDefault();

//     var name = document.getElementById('name').value;
//     var descriptionText = document.getElementById('textarea').value;
//     var phoneNumber = document.querySelector('.phone-number').value;
//     var email = document.getElementById('email').value;

//     var token = '6997142985:AAHyCSd__KMKTdQ-3F5WWq9E16agEw_1shA';
//     var chatId = -4207888380;
//     var textMessage = `New request:%0A - Name: ${encodeURIComponent(name)}%0A - Cleaning description: ${encodeURIComponent(descriptionText)}%0A - Phone number: ${encodeURIComponent(phoneNumber)}%0A - Email: ${encodeURIComponent(email)}`;

//     let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${textMessage}`;
//     let api = new XMLHttpRequest();
//     api.open("GET", url, true);
//     api.send();

//     console.log('success');
// });