$(document).ready(function() {
        var loadingPage = document.getElementById('loading-page');
    
        setTimeout(function () {
            loadingPage.style.display = 'none';
            loadingPage.addClass('animate__animated animate__fadeOut');
        }, 5000); // 3000 milliseconds = 3 seconds
})
// Set the timeout

// function hideLoadingPage() {
//     var loadingPage = document.getElementById('loading-page');

//     setTimeout(function () {
//         loadingPage.style.display = 'none';
//     }, 1000); // 3000 milliseconds = 3 seconds
// }

