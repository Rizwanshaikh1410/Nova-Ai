// contact.js
(function() {
  emailjs.init("MfAJXgQ9PaHH-4Vag"); // Replace with your EmailJS public key
})();

document.getElementById("cf-send").addEventListener("click", function() {
  const name = document.getElementById("cf-name").value.trim();
  const email = document.getElementById("cf-email").value.trim();
  const message = document.getElementById("cf-message").value.trim();
  const note = document.getElementById("cf-note");

  if (!name || !email || !message) {
    note.style.color = "red";
    note.textContent = "Please fill all fields.";
    return;
  }

  note.style.color = "gray";
  note.textContent = "Sending message...";

  // Send message to your Gmail
  emailjs
    .send("service_qxt18rn", "template_o6q3tnf", {
      from_name: name,
      from_email: email,
      message: message,
    })
    .then(() => {
      // Auto response to client
      return emailjs.send("service_qxt18rn", "template_mkpzd4e ", {
        to_email: email,
        reply_to: "novaai1410@gmail.com",
      });
    })
    .then(() => {
      note.style.color = "green";
      note.textContent = "Message sent successfully!";
      document.getElementById("contactForm").reset();
    })
    .catch((err) => {
      note.style.color = "red";
      note.textContent = "Error sending message. Please try again later.";
      console.error(err);
    });
});
