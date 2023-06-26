$(document).ready(function() {
    setTimeout(function() {
        $('.others').addClass('others_none');
    }, 1000);
});


var currentPageIndex = 0;
var pages = document.getElementsByClassName("page");

function previousPage() {
    if (currentPageIndex > 0 ) {
        pages[currentPageIndex].classList.remove("active-page");
        currentPageIndex--;
        pages[currentPageIndex].classList.add("active-page");
    }
}


function nextPage() {
    if (currentPageIndex < pages.length - 1) {
        pages[currentPageIndex].classList.remove("active-page");
        currentPageIndex++;
        pages[currentPageIndex].classList.add("active-page");
    }
    if (currentPageIndex == pages.length - 1) {
        console.log("cool");
        // $(".others").addClass("active-page");
        $(".others").removeClass("others_none");
        // location.reload();
        $(".others").reload();
        // $('.others').load('index.html .others');


    }
}
function test() {
    $(".others").removeClass("others_none");
}