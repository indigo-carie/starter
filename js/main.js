function CreateRecordType() {
  var obj = $('#survey').serialize();
  $.ajax({
      type: "POST",
      data: JSON.stringify(obj),
      url: "http://indigostuff.azurewebsites.net/api/recordtypes",
      contentType: "application/json",
      success: function () { alert("success"); },
      error: function(jqXHR, textStatus, errorThrown) { alert(textStatus + ": " + errorThrown); }
  });

  return false; 

};


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
  //if ($("#next").is(":visible") && $("fieldset.current").find("input, textarea").valid() ){
    if ($("fieldset.current").index() != numQuestions){
      e.preventDefault();
      nextSection();
      return false;
    } 
});

$("input[type=radio]").on("click", function(e){
  nextSection();
});

$("form").on("submit", function(e){
  if ($("#next").is(":visible") || $("fieldset.current").index() < numQuestions || !$("fieldset.current").find("input, textarea").valid()){
    e.preventDefault();
    return false;
  }
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
        $("#next").html('SKIP & FINISH');
        $("input[type=submit]").show();
      } else {
        $("#next").html('SKIP');
        $("input[type=submit]").hide();
      }
  }, 80);

}