const formBtn = document.querySelector('.form-button')
const postsContainer = document.querySelector('.posts-container')
const form = document.querySelector('form')
let today = new Date();
 
let dd = today.getDate();
let mm = today.getMonth() + 1;
 
let yyyy = today.getFullYear();
 
if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}
today = dd + '.' + mm + '.' + yyyy;

formBtn.addEventListener('click', e => {
    const nickname = document.querySelector('.name')
    const message = document.querySelector('.textarea');
    e.preventDefault();
    if(nickname.value != '' && message.value != '') {
        postsContainer.innerHTML = `
        <div class="post">
        <div class="upper-post">
            <p class="h3 nickname">${nickname.value}</p>
            <p class="public-date">${today}</p>
        </div>
        <p class="text post-text">${message.value}</p>
    </div>
        ` + postsContainer.innerHTML;
    }
    form.reset();

})