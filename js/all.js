var currentPageIndex = 0;
var pages = document.getElementsByClassName("page");
        
function nextPage() {
    if (currentPageIndex < pages.length - 1) {
        pages[currentPageIndex].classList.remove("active-page");
        currentPageIndex++;
        pages[currentPageIndex].classList.add("active-page");
    }
    if (currentPageIndex == pages.length - 1) {
        console.log("cool");
        $(".others").addClass("active-page");


    }
}