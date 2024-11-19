const paralaxEffect = document.querySelector('.blog__block');
window.addEventListener('scroll', () => {
    blogBlockParalax()
});
window.addEventListener('resize', () => {
    blogBlockParalax()
});
function blogBlockParalax(){
    const scrollY = window.scrollY;
    const blockOffsetTop = paralaxEffect.offsetTop;
    const startEffect = blockOffsetTop - 200;
    const maxTranslateY = 400;
    const minTranslateY = -400;
    if (scrollY >= startEffect && window.innerWidth > 767) {
        const deltaScroll = scrollY - startEffect;
        let newTranslateY = maxTranslateY - deltaScroll;
        if (newTranslateY < minTranslateY) {
            newTranslateY = minTranslateY;
        }
        paralaxEffect.style.transform = `translateY(${newTranslateY}px)`;
        paralaxEffect.style.marginBottom = `-${Math.abs(newTranslateY)}px`;
    }
    else{
        paralaxEffect.style.transform = ``;
        paralaxEffect.style.marginBottom = ``;
    }
}