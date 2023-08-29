const header_bg = document.querySelector('header')
const nav = document.querySelectorAll('nav a')
const section = document.querySelectorAll('section')
const body = document.querySelector('body, html')
const tab_title = document.querySelectorAll('.tab_title a')
const tab_contents = document.querySelectorAll('.tab_contents .contents')
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
        if(body.scrollTop >= section[i].offsetTop){
            console.log('.')
            for(let j of nav){j.classList.remove('active')}
            t.classList.add('active')
        }
    })
})