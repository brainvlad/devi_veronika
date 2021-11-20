$(document).ready(function () {
    $("#dropdown").click(function () {
        if ($('.dropdown__item').css('display') == "none") {
            $(".dropdown__item").show(300);
            $("#dropdown").addClass('_active')
        } else {
            $(".dropdown__item").hide(200);
            $(".dropdown__item").hide(200);
            $("#dropdown").removeClass('_active')
        }
    })
});