

function start_wheel(){
  ["left","right"].forEach(i=>{
      elm = $("#marquee_edge_"+i)
      elm.removeClass('marquee_edge_animation_class_off');
      elm.addClass('marquee_edge_animation_class_on');
      $("#marquee_edge_"+i).on('animationend', function(){    
        $("#marquee_edge_"+i).removeClass('marquee_edge_animation_class_on');
      });
    })
  $("#stickerwheel")[0].start()
  
}

$(document).ready(()=>{
  
  wheel = $("#stickerwheel")[0]
  
  wheel.onstart = ()=>{
    console.log("wheel started")
  }
  wheel.onfinish = ()=>{
    ["left","right"].forEach(i=>{
      elm = $("#marquee_edge_"+i)
      elm.addClass('marquee_edge_animation_class_off');
    })
    setTimeout(()=>{start_wheel()},3000)
    
  }
  
})
  

