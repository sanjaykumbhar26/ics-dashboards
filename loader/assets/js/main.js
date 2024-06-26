$(function () {
    "use-strict";
    $(window).on("load", function () {
        $("#fakeLoader").fakeLoader({
            zIndex: 999,
            spinner: "spinner2",
            bgColor: "#ffffff",
        });
    });
});
