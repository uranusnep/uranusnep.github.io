$(function(){
    
    $("p1").click(function(){
        $("body").append("<div><input type='text'/><button>削除</button></div>")
    });
    
    $("p2").on("click", function(){
        $("input, button").fadeOut();
    });
   
    $("body").on("click", "button", function(){
        $(this).parent().fadeOut();
    });
});