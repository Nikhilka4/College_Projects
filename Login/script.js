document.getElementById('toggle-password-visibility').addEventListener('click', togglePasswordVisibility);
document.getElementById('toggle-password-visibility-slash').addEventListener('click', togglePasswordVisibility);

function togglePasswordVisibility() {
    var passwordField = document.getElementById('password-field');
    var eyeIcon = document.getElementById('toggle-password-visibility');
    var eyeSlashIcon = document.getElementById('toggle-password-visibility-slash');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.style.display = 'none';
        eyeSlashIcon.style.display = 'inline';
    } else {
        passwordField.type = 'password';
        eyeIcon.style.display = 'inline';
        eyeSlashIcon.style.display = 'none';
    }
}

