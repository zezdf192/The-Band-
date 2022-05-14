const header = document.querySelector('.js-header')
const menuMobies = document.querySelectorAll('#nav li a[href*="#"]')
const menu = document.querySelector('.js-menu')
const hideHeader = document.getElementById('header').clientHeight


function menuClose() {
    if (header.clientHeight === hideHeader) {
        header.style.height = 'auto' 
    } else {
        header.style.height = null
    }
}

for (var i = 0; i < menuMobies.length; i++) {
    var menuMobie = menuMobies[i]

    menuMobie.onclick = function(event) {
        
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        
        if (isParentMenu) {
            event.preventDefault()
            
        } else {
            header.style.height = null
        }
        
    }
}


menu.addEventListener('click' ,menuClose)

const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContaner = document.querySelector('.js-modal-contaner')

// Hàm bật modal(thêm class open vào model)
function showBuyTicket() {
    modal.classList.add('open')
}

// Hàm tắt modal(xoá class open của modal)
function hideBuyTicket() {
    modal.classList.remove('open')
}

// Vòng lặp gọi tất cả nút buttuon buy ticket
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click',showBuyTicket)
}

// Click vào modalClose sẽ thực hiện hàm hideTicket 
modalClose.addEventListener('click', hideBuyTicket)

modal.addEventListener('click', hideBuyTicket)

// Dừng nổi bọt 
modalContaner.addEventListener('click', function(event) {
    event.stopPropagation()
})
