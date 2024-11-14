const contactsBtn = document.querySelectorAll('.contacts__btn, .consultationPopup__close');
const consultationPopup = document.querySelector('.consultationPopup');
contactsBtn.forEach(element => {
    element.addEventListener('click', () => {
        consultationPopup.classList.toggle('active');
        document.querySelector('.body').classList.toggle('no-scroll')
    });
});
const element = document.getElementById('tel');
const maskOptions = {
  mask: '+{38}(000) 000 00 00'
};
IMask(element, maskOptions);