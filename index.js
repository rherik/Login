function showPassword(){
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye_slash')
    const fieldPassword = document.getElementById('field_password')

    if (eye.style.display === 'none'){
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fieldPassword.type = 'text';
    }else{
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        fieldPassword.type = 'password';
    }
};

document.getElementById('btn_login').addEventListener('click', function(e){
    e.preventDefaut();
    alert('Logado!');
})
