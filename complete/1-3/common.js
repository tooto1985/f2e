$(function() {
    $(".menu").load("Menu.html", function() {
        $("a").each(function() {
          if(this.pathname == location.pathname) {
              $(this).addClass("selected");
          }
        });
        if ($("a").is(".selected") == false) {
            $("a").first().addClass("selected");
        }
    });
});
