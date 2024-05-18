document.addEventListener("DOMContentLoaded", function () {
  const personalInfoForm = document.getElementById("personalInfoForm");

  personalInfoForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const formData = new FormData(personalInfoForm);
    const fullName = formData.get("fullName");
    const dob = formData.get("dob");
    const email = formData.get("email");

    console.log(`Name: ${fullName}, Date of Birth: ${dob}, Email: ${email}`);

    // Perform validation and then redirect if everything is correct
    window.location.href = "App.html";
  });
});
