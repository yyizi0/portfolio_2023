const header_bg = document.querySelector('header')
const nav = document.querySelectorAll('nav a')
const section = document.querySelectorAll('section')
const body = document.querySelector('body, html')
const tab_title = document.querySelectorAll('.tab_title a')
const tab_contents = document.querySelectorAll('.tab_contents .container')
const open_nav = document.querySelector('.open_nav')
const m_nav_open = document.querySelector('.m_nav_open')
console.log(tab_title,tab_contents,nav)
window.addEventListener('scroll',function(){
    if(window.scrollY > 0){
        // console.log('.')
        header_bg.style.padding = '30px 100px 0'
        m_nav_open.style.top = '60px'
    }else {
        header_bg.style.padding = '70px 100px 0'
        m_nav_open.style.top = '100px'
    }
})
open_nav.classList.remove('active')
m_nav_open.classList.remove('active')
function toggleHandler(e) {
    open_nav.classList.toggle('active')
    m_nav_open.classList.toggle('active')
    e.preventDefault()
}
function init() {
    open_nav.addEventListener("click", toggleHandler)
}
init()
// tab컨텐츠
for(let j of tab_contents){j.style.display = 'none'}
tab_contents[0].style.display = 'flex'
tab_title.forEach(function(t,i){
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let j of tab_contents){j.style.display = 'none'}
        for(let n of tab_title)(n.classList.remove('active'))
        tab_contents[i].style.display = 'flex'
        t.classList.add('active')
    })
})
// nav의 클릭 이벤트
for(let j of nav){j.classList.remove('active')}
nav[0].classList.add('active')
nav.forEach(function(t,i){
    t.addEventListener('click',function(){
        for(let j of nav){j.classList.remove('active')}
        t.classList.add('active')
    })
    // nav의 스크롤 이벤트
    window.addEventListener('scroll',function(){
        if(body.scrollTop >= section[i].offsetTop-200){
            // console.log('.')
            for(let j of nav){j.classList.remove('active')}
            t.classList.add('active')
        }
    })
})
// 이미지팝업
$(function(){
    // 변수 선언
    var imageButton = $('.image a');
    var popup = $('.img-popup');
    var closeButton = popup.find('.close-btn');
    var htmlAndBody = $('html, body');
    var focusTarget;
    // 팝업 생성
    imageButton.on('click', function(e){
        e.preventDefault();
        var popupImg = popup.find('> .popup-inner > img');
        var image = $(this).find('> img');
        var src = image.attr('src');
        var alt = image.attr('alt');
        focusTarget = $(this);
        popupImg.attr('src', src).attr('alt', alt);
        createPopup();
    });
    // 팝업 제거
    popup.on('click', function(){
        removePopup();
    });
    closeButton.on('click', function(e){
        e.preventDefault();
        removePopup();
    });
    // 팝업 생성 함수
    function createPopup(){
        popup.addClass('active');
        htmlAndBody.css('overflow-y', 'hidden');
        setTimeout(function(){
            closeButton.focus();
        }, 50);
    }
    // 팝업 제거 함수
    function removePopup(){
        popup.removeClass('active');
        focusTarget.focus();
        htmlAndBody.css('overflow-y', 'visible');
    }
})
const etc_slide = new Swiper('.etc_slide',{
    autoplay:{delay:2000},
    slidesPerView:3,
    loop:true,
    pagination: {
        el: '.swiper-pagination',
        clickable : true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})