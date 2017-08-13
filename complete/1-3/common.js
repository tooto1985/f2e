$(function() {
    $(".menu").load("Menu.html", function() {
        $("a").each(function() {
          if(this.pathname == location.pathname) {
              $(this).addClass("selected");
          }
        });
    });
});
