document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("surveyForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const age = formData.get("age");
    const gender = formData.get("gender");
    const feedback = formData.get("feedback");

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Age:", age);
    console.log("Gender:", gender);
    console.log("Feedback:", feedback);
  });
});
