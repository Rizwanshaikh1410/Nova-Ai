(function() {
  // Initialize EmailJS with your Public Key
  emailjs.init("MfAJXgQ9PaHH-4Vag");
})();

document.getElementById("cf-send").addEventListener("click", async function() {
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

  try {
    // --- STEP 1: Send main email to you (admin) ---
    await emailjs.send("service_qxt18rn", "template_v753izb", {
      from_name: name,
      from_email: email, // Client email (visible in received mail)
      message: message,
      to_email: "novaai1410@gmail.com" // Your email (receiver)
    });

    // --- STEP 2: Auto reply to client ---
    await emailjs.send("service_qxt18rn", "template_mkpzd4e", {
      to_email: email, // send to client
      user_name: name,
      reply_to: "novaai1410@gmail.com",
      auto_reply_message:
        "Aapke question ka jawaab aapko jald milega ya phir aapka solution 24–72 hours mein ho jayega.\n\nNova AI Team"
    });

    note.style.color = "green";
    note.textContent = "Message sent successfully!";
    document.getElementById("contactForm").reset();

  } catch (error) {
    console.error("EmailJS Error:", error);
    note.style.color = "red";
    note.textContent = "Error sending message. Please try again later.";
  }
});
