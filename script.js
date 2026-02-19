// 1. Select the element (Elementi seçirik)
// We look for all 'a' tags, but let's just make an alert for now
const contactLink = document.querySelector('nav ul li:last-child a') ;// This will select the first 'a' tag it finds.

// 2. Add an event listener (Hadisəni izləyirik)
contactLink.addEventListener('click' , function(event) {
   
    // Prevent the default link behavior (Linkin normal hərəkətini dayandırırıq)
    event.preventDefault();

// Show a message (Mesaj göstəririk)
alert("Thank you for your interest! (Marağınız üçün təşəkkürlər!)");

});




console.log("Script is loaded successfully! (Skript uğurla yükləndi!)");