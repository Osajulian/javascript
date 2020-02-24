// subnit event - preventing form submission upon firing the submit event

let form = document.getElementById('user-form');


form.addEventListener('submit', event => {
 

    // accessing form elements
    let user = form.elements['user'];
    let avatarFile = form.elements['avatar-file'];
  
    let userError = document.getElementById('user-error');
    
    if (user.value.length < 3) {

        user.style.borderColor = 'red'
        userError.textContent = 'Invalid entry';
        userError.style.color = 'red';
        user.focus();
        
    }
    else {
        user.style.borderColor = '';
        userError.textContent = '';
        console.log(user.value, avatarFile.value)
    }
    // preventing form submission
    event.preventDefault();
});


