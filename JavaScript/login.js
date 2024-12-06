document.getElementById('toggleLogin').addEventListener('click', function() {
    document.getElementById('loginContainer').classList.remove('d-none');
    document.getElementById('registerForm').parentElement.parentElement.parentElement.classList.add('d-none');
});

document.getElementById('toggleRegister').addEventListener('click', function() {
    document.getElementById('loginContainer').classList.add('d-none');
    document.getElementById('registerForm').parentElement.parentElement
    .parentElement.parentElement.parentElement.classList.remove('d-none');
});