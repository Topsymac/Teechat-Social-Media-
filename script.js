const menuItems = document.querySelectorAll('.menu-item');

const messageNotificatiion = document.querySelector('#messages');
const messages = document.querySelector('.messages');

const email = document.getElementById('email');
const number = document.getElementById('number');




// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}


menuItems.forEach(item => {
    item.addEventListener('mousedown', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notification-popup').style.display = 'none';
        } else {
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none'
        }
    })
})

// MESSAGES


messageNotificatiion.addEventListener('mousedown', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotificatiion.querySelector(".notification-count").style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 5000);
})


// POPUP FORM

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


// popup form validation

email.addEventListener('change', function() {
    if (!email.value.includes('@')) {
        alert("This field should be a valid email");
        email.setAttribute('class', 'form-control is-invalid');
        email.focus();
    }
})
number.addEventListener('change', function() {
    if (number.value.length != 11) {
        alert('Phone number must be 11 digits');
        number.setAttribute('class', 'form-control is-invalid');
        number.focus();
    }
})