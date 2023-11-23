const sidebar = document.querySelector('.sidebar');
const containerWidth = document.querySelector('.container').getBoundingClientRect().width;
const mainContent = document.querySelector('.main-content')
const footer = document.querySelector('footer')
const sidebarTop = (sidebar.getBoundingClientRect().top + document.documentElement.scrollTop).toFixed();
let fixedMoment = 0;
window.addEventListener('scroll', e => {
    const scrollTop = document.documentElement.scrollTop;
console.log((sidebar.getBoundingClientRect().bottom), (footer.getBoundingClientRect().top - 120));
    if((scrollTop > Number(sidebarTop) - 50) && (((sidebar.getBoundingClientRect().bottom) < (footer.getBoundingClientRect().top - 120)) || scrollTop < fixedMoment ) ) {
        fixedMoment = 0;
        sidebar.style.marginLeft = containerWidth - 160 - sidebar.clientWidth + 'px';
        sidebar.style.position = 'fixed';
        sidebar.style.top = '50px';
        sidebar.style.bottom = '';

        mainContent.style.marginRight = sidebar.clientWidth + 30 + 'px'
    }
    else if (((sidebar.getBoundingClientRect().bottom) >= (footer.getBoundingClientRect().top - 120))) {
        fixedMoment = scrollTop;
        sidebar.style.position = 'absolute';
        sidebar.style.bottom = '50px';
        sidebar.style.top = '';
    }
    else {
        sidebar.style.position = '';
        sidebar.style.bottom = '';
        sidebar.style.top = '';
        sidebar.style.marginLeft = '';
        mainContent.style.marginRight = '';
    }
})