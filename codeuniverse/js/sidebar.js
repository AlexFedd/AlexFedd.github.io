const sidebar = document.querySelector('.sidebar');
const containerWidth = document.querySelector('.container').getBoundingClientRect().width;
const mainContent = document.querySelector('.main-content')
const footer = document.querySelector('footer')
const sidebarTop = (sidebar.getBoundingClientRect().top + document.documentElement.scrollTop).toFixed();
window.addEventListener('scroll', e => {
    const scrollTop = document.documentElement.scrollTop;
console.log();
    if(scrollTop > Number(sidebarTop) - 50) {
        sidebar.classList.add('sidebar--fixed');
        sidebar.style.marginLeft = containerWidth - 160 - sidebar.clientWidth + 'px';
        mainContent.style.marginRight = sidebar.clientWidth + 30 + 'px'
    }
    else if ( > footer.getBoundingClientRect().top + scrollTop) {

    }
    else {
        sidebar.classList.remove('sidebar--fixed');
        sidebar.style.marginLeft = '';
        mainContent.style.marginRight = '';
    }
})