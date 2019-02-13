var submitButton = document.getElementById('submitBtn');
console.log(submitButton);
var errorName = document.getElementById('errorName');
var errorAge = document.getElementById('errorAge');

submitButton.addEventListener("click", function (event) {
    errorName.style.display = 'none';
    errorAge.style.display = 'none';

    var name = document.myForm.name.value;
    var age = document.myForm.txtAge.value;

    if (!name) {
        event.preventDefault();
        errorName.style.display = 'block';
    }
    if (!age) {
        event.preventDefault();
        errorAge.style.display = 'block';
    }
})



function submitQuiz() {
    console.log('submitted');

}