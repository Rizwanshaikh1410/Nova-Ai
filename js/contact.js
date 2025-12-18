document.addEventListener("DOMContentLoaded", () => {

  // Bootstrap validation
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", event => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add("was-validated");
  });

  // Subject toggle
  const subject = document.getElementById("subject");
  const customBox = document.getElementById("customSubjectContainer");

  subject.addEventListener("change", () => {
    if (subject.value === "Other") {
      customBox.classList.remove("d-none");
    } else {
      customBox.classList.add("d-none");
    }
  });

});
