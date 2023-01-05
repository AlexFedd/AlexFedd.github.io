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
const home = [document.querySelector('#home'), document.querySelector('#nav-home')];
const about = [document.querySelector('#about'), document.querySelector('#nav-about')];
const works = [document.querySelector('#works'), document.querySelector('#nav-works')];
const services = [document.querySelector('#services'), document.querySelector('#nav-services')];
const contact = [document.querySelector('#contact'), document.querySelector('#nav-contact')];

const keys = [home, about, services, works,  contact];

var Visible = function(selector){
    console.log(selector);
    let elementHeight = selector.clientHeight;
    let elementTop = selector.offsetTop;
    let elementBottom = elementTop + elementHeight;
    let windowTop = window.scrollY;
    let windowBottom = windowTop + window.innerHeight;
    console.log(elementTop, elementBottom, windowTop, windowBottom);
    if (windowTop <= elementBottom && windowBottom >= elementTop)
    {
        return true;
    }
}

window.addEventListener('scroll', function() {
    for(item of keys)
    {
        if (Visible(item[0]))
        {
            for(item1 of keys)
            {
                item1[1].classList.remove('active');
                console.log("Deleted class 'active' from" + item[1]);
            }
            item[1].classList.add("active");
            break;
        }
    }
  });



