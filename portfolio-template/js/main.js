const nav = document.querySelector('#navigation');
const nav_btn = document.querySelector('#nav-btn');
const nav_btn_img = document.querySelector('#nav-btn-img');

nav_btn.onclick = () => {
    if(nav.classList.toggle('open')) {
        nav_btn_img.src = "./img/NAV CLOSE.svg"; 
    }
    else
    {
        nav_btn_img.src = "./img/NAV.svg"; 
    }
}

AOS.init(
    {
        once:true
    }
);
