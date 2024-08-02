const slideShows = document.getElementsByClassName('slideshow-container');

let slideIndex = [];
let slideId = [];
let i = 0;

[].forEach.call(slideShows, () => {
    for (let j = 0; j < slideShows[i].children.length - 2; j++) {
        let dot = document.createElement('span');
        dot.className = `dot${i+1}`;
        dot.setAttribute('onclick',`currentSlide(${j+1}, ${i+1})`);
        slideShows[i].parentElement.children[4].appendChild(dot);
    }
    slideIndex.push(1);
    slideId.push(`slideshow${i+1}`);
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
        slideIndex[no] = 1;
        n = 1;
    }

    if (n < 1) {
        slideIndex[no] = x.length;
        n = x.length;
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
        try {
            dots[i].style.backgroundColor = '#aaa';
        } catch (e) {
            console.log(e);
        }
    }

    dots[n-1].style.backgroundColor = 'var(--secondary-color)';
    x[slideIndex[no]-1].style.display = 'flex';
}
