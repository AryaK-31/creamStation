function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


AOS.init({
    offset: 120,
    duration: 1500
});
