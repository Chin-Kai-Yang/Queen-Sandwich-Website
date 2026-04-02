let ads = document.querySelectorAll('.advertisement .adList .ad');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

// config param
let countAd = ads.length;
let adActive = 0;

// event next
next.onclick = function () {
    adActive = adActive + 1;
    if (adActive >= countAd) {
        adActive = 0;
    }
    showAdvertisement();
}

//event prev click
prev.onclick = function () {
    adActive = adActive - 1;
    if (adActive < 0) {
        adActive = countAd - 1;
    }
    showAdvertisement();
}

// auto run slider
let refreshInterval = setInterval(() => { next.click(); }, 5000)

function showAdvertisement() {
    //Remove ad active old
    let adActiveOld = document.querySelector('.advertisement .adList .ad.active');
    adActiveOld.classList.remove('active');

    // Add new items
    ads[adActive].classList.add('active');
}

