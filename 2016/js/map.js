$(document).ready(function() {
    $cur = $("#home");

    $(".nav-tabs li").click( function() {
        var name = $(this).attr("id");
        // $("[name='" + $cur.attr("id") + "']").hide();
        // $cur.removeClass('active');
        // $cur = $(this);
        // $cur.addClass('active');
         //alert(name);
        if( name == "t1" || name == "t2" || name == "t3"  || name == "t4" ) {
            $("#img2").hide() ;
            $("#img3").hide() ;
            $("#img1").show() ;
        }
        else if( name == "t5" || name == "t6" || name == "t7"  ) {
            $("#img3").hide() ;
            $("#img1").hide() ;
            $("#img2").show() ;
        }
        else {
            $("#img1").hide() ;
            $("#img2").hide() ;
            $("#img3").show() ;
        }
        $("[name='" + $cur.attr("id") + "']").fadeIn("slow") ;
    });
});