$(document).ready(function () {

    var text = "";
    var i = 70; //seconds to run
    var s = 0; //score
    
    var minutes = Math.floor(i/60);
    var seconds = i%60;
    if(seconds == 0 && minutes != 0)
    {
        minutes--;
        seconds =60;
    }

    console.log(minutes+":"+seconds);

     //ABCDEFGHIJKLMNOPQRSTUVWXYZ
     //0123456789
    function random_char() {
    var possible = "abcdefghijklmnopqrstuvwxyz";
    text = possible.charAt(Math.floor(Math.random() * possible.length));  
    $("#output_here").text(text);
    $("#output_here").css(text);
     $("#input_here").focus(); 
    return;
    }

    function random_pos() {
        
        var posx = (Math.random() * 800);
        var posy = (Math.random() * 400);

        $("#output_here").css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'background-color':'white',
        'height':'50px',
        'width':'50px',
        'border-radius':'50%',
        'text-align':'center'

    });
      
    }
    onTimer();
    random_char();
    random_pos();
    charChangeTimer();


    $(document).keypress(function (event) {
    //jQuery.keyup(function(){ 
    
    console.log("ascii code "+text.charCodeAt(0)); 
     console.log(event.which);  
    //   $("input").keyup(function(event){ 
    //     $("div").html("Key: " + event.which);
    // });
        if(event.which == text.charCodeAt(0)){
            console.log("correct input");
            //$(this).val('');
            s++;
            $("#score").text("Your Score :"+s);
            random_char();
            random_pos();
            return;
         }
          else{
             console.log("incorrect input");
             //$(this).val('');
            //beep sound
             return;
        }           
           
    });

    $("#reload").click(function()
    {
        location.reload();
    })
      
      function charChangeTimer() {
      //$("#mycounter").text(i);
      
      if (seconds > 0) {
        random_char();
        random_pos();
        setTimeout(charChangeTimer, 2000);
      }
      else {
        //alert("Game Over...Your Score is: "+s);
      }
    }

    
      function onTimer() {
      seconds--;
      if(seconds>0){
        setTimeout(onTimer, 1000);
      }
      if(seconds == 0 && minutes>0){
        seconds=60;
        minutes--;
        setTimeout(onTimer, 1000);
      }
      if(seconds == 0 && minutes == 0){
        $("#modal").css({
            'visibility':'visible',

        });
        $("#score_modal").append(s);
      }
      {
        if(seconds<10){
           $("#mycounter").text("0"+minutes+":0"+seconds);
        }
        else{
           $("#mycounter").text("0"+minutes+":"+seconds); 
        }
        
      }
      
   }
  
});