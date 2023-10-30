function header_flicker(){
  //apply the flicker animation then remove it after it finishes
  border = $("#header-image-border");
  border.on('animationend', function(){    
      border.removeClass('header-border-flicker-class');
  });
  border.addClass('header-border-flicker-class');
}
function header_flicker_loop(){
  chance = Math.floor(Math.random() * 100);
  if(chance < 30){
    //random chance to cause a flutter effect rather than just a normal off and on
    //by flutter i mean multiple toggles in quick sucession 
    flutter_cnt =  Math.floor(Math.random() * 5);
    for(var i = 0; i < flutter_cnt; i++){
      header_flicker();
    }
  }else{
    header_flicker();
  }
  setTimeout(header_flicker_loop,Math.floor(Math.random() * 2000));
}
$(document).ready(function() {
  header_flicker_loop();
});