'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');



const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden'); 
}

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//refractoring add eventlistener to showModal button
for(let i = 0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', openModal);
}   

// for(let i = 0; i < btnsShowModal.length; i++){
//     btnsShowModal[i].addEventListener('click', function() {
//         modal.classList.remove('hidden');
//         overlay.classList.remove('hidden'); 
//     });
// }   


//refractoring add eventlistener to closeModal button
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal)

// // add eventlistener to closeModal button
// btnCloseModal.addEventListener('click', function() {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function() {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// })

// how to work on keypress event
document.addEventListener('keydown', function(event) {
    console.log(event.key);

    // if key equal to Escape, then we check 
    // if in the modal element have hidden class or not
    // if(event.key === 'Escape'){
    //     if(!modal.classList.contains('hidden')){
    //         closeModal();
    //     }
    // }

    // refactoring by used && 
    if(event.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }

})
