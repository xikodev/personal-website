const slideShows = document.getElementsByClassName('slideshow-container');

let slideIndex = [];
let slideId = [];
let i = 0;

[].forEach.call(slideShows, () => {
    slideIndex.push(1);
    slideId.push(`mySlides${i+1}`);
    showSlides(1, i);
    i++;
});

function plusSlides(n, no) {
    no--;
    showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
    no--;
    showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    let dots = document.getElementsByClassName(`dot${no+1}`);

    if (n > x.length) {
        slideIndex[no] = 1
    }

    if (n < 1) {
        slideIndex[no] = x.length;
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
        dots[i].style.backgroundColor = '#aaa';
    }
    x[slideIndex[no]-1].style.display = 'flex';
    dots[n-1].style.backgroundColor = 'var(--secondary-color)';
}
