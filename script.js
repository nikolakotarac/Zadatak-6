const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content')
const thanksModal = document.querySelector('.thanks-modal');
const modalClose = document.getElementById('modal-close');
const thanksModalClose = document.querySelector('.thanks-btn');
const projectBtn = document.querySelector('.project-btn');
const selectBtn = document.querySelectorAll('.select-btn');
const dots = document.querySelectorAll('.dot-radius');
const cardName = document.querySelectorAll('.name');
const bookmark = document.querySelector('.bookmark');
const bookmarkBtn = document.querySelector('.bookmark-btn');
const inputFields = document.querySelectorAll('.input-field');
const optionBtn = document.querySelectorAll('.option-btn');


const mobileMenu = document.querySelector('.mobile-menu')
const hamburger = document.querySelector('.hamburger');
const mobileClose = document.getElementById('menu-close');


bookmark.addEventListener('click', function(){
    if (bookmark.classList.contains('bookmark-active')) {
                bookmark.classList.remove('bookmark-active')
                bookmarkBtn.textContent= 'Bookmark'
            }else {
                bookmark.classList.add('bookmark-active')
                bookmarkBtn.textContent = 'Bookmarked'
            }
})


thanksModalClose.addEventListener('click', function(){
    thanksModal.style.display = "none";
    modalContent.style.display = "block";
    modal.classList.remove('modal-active');
})

modalClose.addEventListener('click',function(){
    const errorMsg = document.querySelectorAll('.card-option');
    modal.classList.remove('modal-active');
    errorMsg.forEach((message)=> {
        message.classList.remove('card-option-error')
    })
})
projectBtn.addEventListener('click', function() {
    modal.classList.add('modal-active');
})

modal.addEventListener('click', function(e){
    const errorMsg = document.querySelectorAll('card-option');
    if(e.target != e.currentTarget){
        return
    }else {
        modal.classList.remove('modal-active');
        thanksModal.style.display = "none";
        modalContent.style.display = "block";
        errorMsg.forEach((message)=> {
            message.classList.remove('card-option-error')
        })
    }
})
selectBtn.forEach((button, index)=> {
    button.addEventListener('click',function(){
        if (button.parent.parent.classList.contains('not-available')){
            return
        } else {
            modal.classList.add('modal-active');
            openModal(index+1)
        }
    })
})


cardName.forEach((opt, index) => {
    opt.addEventListener('click', (e)=> {
        openModal(index)
    })
})
dots.forEach((opt, index) => {
    opt.addEventListener('click', (e)=> {
        
        openModal(index)
    })
})

const openModal = (index) => {
    const donationCard = document.getElementsByClassName('donation-card');
    const errorMsg = document.querySelectorAll('.card-option');
    if(donationCard[index].classList.contains('not-available')){
        return
    }else{
        const activeCard = document.querySelector('.donation-card-active')
        if (activeCard && activeCard != donationCard[index]){
            activeCard.classList.remove('donation-card-active')
        }
        errorMsg.forEach((message)=> {
            message.classList.remove('card-option-error')
        })
        donationCard[index].classList.toggle('donation-card-active');
    }
}

optionBtn.forEach((button, index)=>{
    button.addEventListener('click',function() {
        let minValue = inputFields[index].getAttribute('min');
        let currentValue = inputFields[index].value;
        const parent = document.querySelectorAll('.card-option');
        if (currentValue < minValue){
            parent[index].classList.add('card-option-error');
            const errorMsg = document.querySelectorAll('.error-msg');
            errorMsg[index].innerText = `Minimum value for this plan is ${minValue}$`
        }else {
            parent[index].classList.remove('card-option-error');
            modalContent.style.display = "none";
            thanksModal.style.display = 'block';
            
        }
    })
})

hamburger.addEventListener('click', function(){
   mobileMenu.style.display = "block";

})
mobileClose.addEventListener('click', function(){
    mobileMenu.style.display = "none";
 
 })
 mobileMenu.addEventListener('click',function(e){
    if (e.target != e.currentTarget){
        return
    }else{
        mobileMenu.style.display = "none";                                    
    }
 })