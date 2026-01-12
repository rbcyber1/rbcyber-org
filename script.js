 window.onload = function() {
                 document.getElementById('rectangle1').style.height='500px'; 
                 setTimeout(function() {
                 document.getElementById('Logo').style.width='222px';
                }, 1000);
                setTimeout(function() {
                 document.getElementById('Username').style.opacity='1';
                }, 1000);
                setTimeout(function() {
                 document.getElementById('UsernameInput').style.opacity='1';
                }, 1000);
                setTimeout(function() {
                 document.getElementById('Password').style.opacity='1';
                }, 1000);
                setTimeout(function() {
                 document.getElementById('PasswordInput').style.opacity='1';
                }, 1000);
                setTimeout(function() {
                 document.getElementById('Submit').style.width='75px';
                }, 1000)
                setTimeout(function() {
                 document.getElementById('Submit').style.opacity='1';
                }, 1250)
            };
            const Submit = document.getElementById('Submit');
Submit.addEventListener('click', () => {
    const Username = document.getElementById('UsernameInput').value;
    const Password = document.getElementById('PasswordInput').value;
console.log('Username:', Username);
console.log('Password:', Password);
if (Username === 'admin' && Password === '1234') {
    alert('Success'); 
    } else {
        alert('Fail');
    }
});