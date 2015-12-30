
//http://webdesign.tutsplus.com/articles/build-a-multi-step-form-interface--webdesign-11715

$("body").on("keyup", "form", function(e){
  if (e.which == 13){
    if ($("#next").is(":visible") && $("fieldset.current").find("input, textarea").valid() ){
      e.preventDefault();
      nextSection();
      return false;
    }
  }
});

var numQuestions = 5; 

$("#back").on("click", function(e){
  if ($("fieldset.current").index() != 1){
    e.preventDefault();
    prevSection();
    return false;
  } else {
    $("#back").addClass("disabled");
  }
});

$("#next").on("click", function(e){
  if ($("fieldset.current").index() != numQuestions){
    e.preventDefault();
    nextSection();
    return false;
  }
});

$("input[type=radio]").on("click", function(e){
  nextSection();
  return false;
});

  
function prevSection(){
  var i = $("fieldset.current").index();
  if (i != 1){
    goToSection(i-2);
  }
}

function nextSection(){
  var i = $("fieldset.current").index();
  if (i < numQuestions){
    goToSection(i++);
  }
}

function goToSection(i){
  $(".questionNumber span").html(i + 1);
  $("fieldset:gt("+i+")").removeClass("current").addClass("next");
  $("fieldset:lt("+i+")").removeClass("current");

  setTimeout(function(){
    $("fieldset").eq(i).removeClass("next").addClass("current active");
      if ($("fieldset.current").index() == numQuestions){
        $("#next").html('Skip & Finish').addClass('submit');
      } else {
        $("#next").html('Skip').removeClass('submit');
      }
  }, 80);

}