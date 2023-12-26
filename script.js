
let popup = document.getElementById("popup");
let toggleBtn = document.getElementById("toggleBtn");
let header = document.querySelector("header");

toggleBtn.addEventListener("click", toggleDropdown);

function toggleDropdown() {
  if (popup.style.display === "none" || popup.style.display === "") {
    popup.style.display = "block";
    toggleBtn.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    popup.style.display = "none";
    toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
  }
}

// Handle clicks on dropdown items
popup.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    // If a dropdown item (anchor) is clicked, close the dropdown
    popup.style.display = "none";
    toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

window.onscroll = function () {
  // Get the scroll position
  let scrollPos = window.scrollY || document.documentElement.scrollTop;

  // Set a threshold value, adjust as needed
  let threshold = 100;

  // Add or remove a class based on the scroll position
  if (scrollPos > threshold) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

var showProjectsButton = document.getElementById('showProjects');
var modal = document.getElementById('smallProjectsModal');

showProjectsButton.addEventListener('click', function() {
  modal.style.display = 'block';
});

function closeModal() {
  modal.style.display = 'none';
}

  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  let messageInput = document.getElementById("message");
  let form = document.getElementById("contactForm");
  let successMsg = document.getElementById("successMsg");

  form.addEventListener("submit", function (event) {
    // Validate name (letters only)
    let nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(nameInput.value.trim())) {
      document.getElementById("errMsgName").classList.add("show");
      event.preventDefault(); // Prevent form submission
    } else {
      document.getElementById("errMsgName").classList.remove("show");
    }

    // Validate email (Gmail address)
    let emailRegex = /^[a-zA-Z0-9_.+-]+@gmail\.com$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      document.getElementById("errMsgGmail").classList.add("show");
      event.preventDefault(); // Prevent form submission
    } else {
      document.getElementById("errMsgGmail").classList.remove("show");
    }

    // Validate message (required)
    if (messageInput.value.trim() === "") {
      document.getElementById("errMsgMessage").classList.add("show");
      event.preventDefault(); // Prevent form submission
    } else {
      document.getElementById("errMsgMessage").classList.remove("show");
      // If all validations pass, show success message
      successMsg.classList.add("show");
    }
  });

  // Clear error messages on input
  nameInput.addEventListener("input", function () {
    document.getElementById("errMsgName").classList.remove("show");
  });

  emailInput.addEventListener("input", function () {
    document.getElementById("errMsgGmail").classList.remove("show");
  });

  messageInput.addEventListener("input", function () {
    document.getElementById("errMsgMessage").classList.remove("show");
  });
















