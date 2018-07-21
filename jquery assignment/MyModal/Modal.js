$(document).ready(() => {
    $("#myBtn").click(function () {

        $(".mymodal").show();
    });

    $(".close").click(() => {

        $(".mymodal").hide();
    });


    $(window).click((event) => {
        if (event.target.id == "myModal") {
            $(".mymodal").hide();
        }
    });
});