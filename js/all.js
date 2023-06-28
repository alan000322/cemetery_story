// $(document).ready(function() {
//     setTimeout(function() {
//         $('.others').addClass('others_none');
//     }, 1000);
// });
// $(document).ready(function () {
//     disableScroll();
// });


var currentPageIndex = 0;
var pages = document.getElementsByClassName("page");
var pages_spotlight = document.getElementsByClassName("page_spotlight");
var notice_status = false;

function previousPage() {
    if (currentPageIndex > 0) {
        pages[currentPageIndex].classList.remove("active-page");
        currentPageIndex--;
        pages[currentPageIndex].classList.add("active-page");
    }

}

function checkLastPage() {
    if (currentPageIndex == pages.length - 1) {
        notice_status = true
    }
}

function DealWithNoticePage() {
    if (notice_status) {
        var n = $('.notice');
        n.addClass('animate__animated animate__fadeOut  animate__delay-1s');
        setTimeout(function() {
            n.addClass('d-none');
        }, 1000);
        
    }
}


// function disableScroll() {
//     document.documentElement.style.overflowY = "hidden";
//     document.body.addEventListener('touchmove', function(e) {
//         e.preventDefault();

//     }, {passive:false});
// }

// function canScroll() {
//     document.documentElement.style.overflowY = "scroll";
//     document.body.addEventListener('touchmove', function(e) {
//         e.preventDefault();

//     }, {passive:true});
// }

function nextPage() {
    if (currentPageIndex < pages.length - 1) {
        console.log(currentPageIndex)
        pages[currentPageIndex].classList.remove("active-page");
        currentPageIndex++;
        pages[currentPageIndex].classList.add("active-page");
        checkLastPage();
        DealWithNoticePage();

    }
}

function deleteNotice() {
    notice_status = true;
    DealWithNoticePage();

}


// window.addEventListener('load', function () {
//     var img = document.querySelector('.responsive-image');
//     var mobileSrc = './photo/topic-1-mobile.jpg';

//     function updateImageSrc() {
//         if (window.innerWidth < 768) {
//             img.src = mobileSrc;
//         } else {
//             img.src = './photo/topic-1.jpg';
//         }
//     }

//     // Update image source on initial load
//     updateImageSrc();

//     // Update image source on window resize
//     window.addEventListener('resize', updateImageSrc);
// });