//http://webdesign.tutsplus.com/articles/build-a-multi-step-form-interface--webdesign-11715

$("#survey").validate({
  success : function(label){
    label.addClass("valid").text("✓");
  },
  error : function(e){
//     console.log(e);
  },
  onsubmit:false
});

$("body").on("keyup", "form", function(e){
  if (e.which == 13){
    if ($("#next").is(":visible") && $("fieldset.current").find("input, textarea").valid() ){
      e.preventDefault();
      nextSection();
      return false;
    }
  }
});


$("#next").on("click", function(e){
  if ($("#next").is(":visible") && $("fieldset.current").find("input, textarea").valid() ){
      e.preventDefault();
      nextSection();
      return false;
    }
});

var numQuestions = 6; 

$("form").on("submit", function(e){
  if ($("#next").is(":visible") || $("fieldset.current").index() < numQuestions || !$("fieldset.current").find("input, textarea").valid()){
    e.preventDefault();
    return false;
  }
});
  
  
function nextSection(){
  var i = $("fieldset.current").index();
  if (i < numQuestions){
    $("li").eq(i+1).addClass("active");
    goToSection(i+1);
  }
}

$("li").on("click", function(e){
  var i = $(this).index();
  if ($(this).hasClass("active")){
    goToSection(i);
  } else {
    alert("Please complete previous sections first.");
  }
})


function goToSection(i){
  $("fieldset:gt("+i+")").removeClass("current").addClass("next");
  $("fieldset:lt("+i+")").removeClass("current");
  $("li").eq(i).addClass("current").siblings().removeClass("current");
  setTimeout(function(){
    $("fieldset").eq(i).removeClass("next").addClass("current active");
      if ($("fieldset.current").index() == numQuestions){
        $("#next").hide();
        $("input[type=submit]").show();
      } else {
        $("#next").show();
        $("input[type=submit]").hide();
      }
  }, 80);

}