// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
var submitBtn = document.getElementById("submit-button");
var contact_page = document.getElementById("contact-page");
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
function replace() {
    contact_page.innerHTML = "<p style='font-size: 24px;'>Thank you for your message!</p>";
}

submitBtn.addEventListener("click", replace);
