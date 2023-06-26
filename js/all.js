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

function previousPage() {
    if (currentPageIndex > 0 ) {
        pages[currentPageIndex].classList.remove("active-page");
        currentPageIndex--;
        pages[currentPageIndex].classList.add("active-page");
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

        // if (currentPageIndex == pages.length - 1) {
        //     canScroll();
        // }
    // }
    // if (currentPageIndex == pages.length - 1) {
    //     console.log("cool");
    //     // $(".others").addClass("active-page");
    //     $(".others").removeClass("others_none");
    //     // location.reload();
    //     $(".others").reload();
    //     // $('.others').load('index.html .others');


    }
}