let upto1 = 0;
let upto2 = 0;
let upto3 = 0;

let count1Visible = false;
let count2Visible = false;
let count3Visible = false;

function updateCount1() {
    let counts1 = document.getElementsByClassName("count1");
    for (let i = 0; i < counts1.length; i++) {
        counts1[i].innerHTML = `${upto1}+`;
    }

    if (upto1 >= 1000) {
        for (let i = 0; i < counts1.length; i++) {
            counts1[i].innerHTML = "1.000+";
        }
        clearInterval(intervalId1);
    }

    upto1++; 
}

function updateCount2() {
    let counts2 = document.getElementsByClassName("count2");
    for (let i = 0; i < counts2.length; i++) {
        counts2[i].innerHTML = `${upto2}+`;
    }

    if (upto2 >= 90) {
        clearInterval(intervalId2);
    }

    upto2++; 
}

function updateCount3() {
    let counts3 = document.getElementsByClassName("count3");
    for (let i = 0; i < counts3.length; i++) {
        counts3[i].innerHTML = `${upto3}+`;
    }

    if (upto3 >= 200) {
        clearInterval(intervalId3);
    }

    upto3++;
}

const intervalId1 = setInterval(() => {
    if (count1Visible) {
        updateCount1();
    }
}, 0.1);

const intervalId2 = setInterval(() => {
    if (count2Visible) {
        updateCount2();
    }
}, 3);

const intervalId3 = setInterval(() => {
    if (count3Visible) {
        updateCount3();
    }
}, 1);

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function updateClassesInViewport() {
    const count1 = document.querySelectorAll('.countAnchor1');
    const count2 = document.querySelectorAll('.countAnchor2');
    const count3 = document.querySelectorAll('.countAnchor3');
    const textAbout = document.querySelectorAll('.pink');
    const package1 = document.querySelectorAll('.kotakPackage1');
    const package2 = document.querySelectorAll('.kotakPackage2');
    const package3 = document.querySelectorAll('.kotakPackage3');
    const brand1 = document.querySelectorAll('.brand1');
    const brand2 = document.querySelectorAll('.brand2');
    const brand3 = document.querySelectorAll('.brand3');
    const brand4 = document.querySelectorAll('.brand4');
    const brand5 = document.querySelectorAll('.brand5');
    const brand6 = document.querySelectorAll('.brand6');
    const judulPackage = document.querySelectorAll('.judulPackage')
    const judulIntiPackage = document.querySelectorAll('.judulIntiPackage')
    const judulCall = document.querySelectorAll('.judulCall')
    const textCall = document.querySelectorAll('.textCall')
    const formCall = document.querySelectorAll('.formCall')

    count1.forEach(element => {
        if (isInViewport(element)) {
            count1Visible = true;
            element.classList.add("count1");
        } else {
            count1Visible = false;
        }
    });

    count2.forEach(element => {
        if (isInViewport(element)) {
            count2Visible = true;
            element.classList.add("count2");
        } else {
            count2Visible = false;
        }
    });

    count3.forEach(element => {
        if (isInViewport(element)) {
            count3Visible = true;
            element.classList.add("count3");
        } else {
            count3Visible = false;
        }
    });

    textAbout.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add("pinkAnimate");
        }
    });

    package1.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add("package1Active");
        }
    });

    package2.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add("package2Active");
        }
    });

    package3.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add("package3Active");
        }
    });
    
    brand1.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add("brand1Active");
        }
    });

    brand2.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add("brand2Active");
        }
    });

    brand3.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add("brand3Active");
        }
    });

    brand4.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add("brand4Active");
        }
    });

    brand5.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add("brand5Active");
        }
    });

    brand6.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add("brand6Active");
        }
    });

    judulPackage.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add("judulPackageActive");
        }
    });

    judulIntiPackage.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add("judulIntiPackageActive");
        }
    });

    judulCall.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add("judulCallActive");
        }
    });

    textCall.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add("textCallActive");
        }
    });

    formCall.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add("formCallActive");
        }
    });
}

window.addEventListener('scroll', updateClassesInViewport);
document.addEventListener('DOMContentLoaded', updateClassesInViewport);