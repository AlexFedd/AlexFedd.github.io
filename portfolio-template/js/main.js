const nav = document.querySelector('#navigation');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if(nav.classList.toggle('open')) {
        navBtnImg.src = "./img/NAV CLOSE.svg"; 
    }
    else
    {
        navBtnImg.src = "./img/NAV.svg"; 
    }
}

AOS.init(
    {
        once:true
    }
);

