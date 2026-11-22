
function toggleTheme() {
  document.body.classList.toggle("dark");
  var btn = document.getElementById("darkModeBtn");
  if (document.body.classList.contains("dark")) {
    btn.innerHTML = "Light Mode";
  } else {
    btn.innerHTML = "Dark Mode";
  }
}


var buttons = document.querySelectorAll(".view-image");
buttons.forEach(function(btn) {
  btn.addEventListener("click", function() {
    document.getElementById("modalImage").src = btn.getAttribute("data-image");
    document.getElementById("imageModalLabel").innerText = btn.getAttribute("data-title");
  });
});


var searchBox = document.getElementById("destinationSearch");
if (searchBox) {
  searchBox.addEventListener("keyup", function() {
    var word = searchBox.value.toLowerCase();
    var cards = document.querySelectorAll(".destination-card");
    var found = 0;
    for (var i = 0; i < cards.length; i++) {
      var text = cards[i].innerText.toLowerCase();
      if (text.includes(word)) {
        cards[i].style.display = "block";
        found = found + 1;
      } else {
        cards[i].style.display = "none";
      }
    }
    if (found == 0) {
      document.getElementById("noResults").style.display = "block";
    } else {
      document.getElementById("noResults").style.display = "none";
    }
  });
}


var contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    var name = document.getElementById("contactName").value;
    var email = document.getElementById("contactEmail").value;
    if (name == "" || email == "") {
      document.getElementById("contactResponse").innerHTML = "Please fill your name and email.";
    } else if (name.length < 3) {
      document.getElementById("contactResponse").innerHTML = "Name must be at least 3 letters.";
    } else {
      document.getElementById("contactResponse").innerHTML = "Thank you " + name + ", we got your message.";
    }
  });
}


var bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", function(e) {
    e.preventDefault();
    var name = document.getElementById("visitorName").value;
    var place = document.getElementById("destination").value;
    document.getElementById("bookingResponse").innerHTML = "Thank you " + name + ", your booking for " + place + " is saved.";
  });
}


var newsletterForm = document.getElementById("newsletterForm");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function(e) {
    e.preventDefault();
    var email = document.getElementById("newsletterEmail").value;
    if (email.includes("@") == false) {
      document.getElementById("newsletterResponse").innerHTML = "Please enter a real email.";
    } else {
      document.getElementById("newsletterResponse").innerHTML = "Thank you, you are subscribed.";
    }
  });
}