
$(document).ready(function(){

    $(".card").mouseover((function){
        console.log("etape 1")
        $(this).addClass('bg-primary text-white text-center p-3')
    });

    $(".card").mouseout() {
        $(this).removeClass('bg-primary text-white text-center p-3')
    });

});