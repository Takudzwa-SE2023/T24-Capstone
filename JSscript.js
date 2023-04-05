
  $(document).ready(function(){
    $(".gaming__poster").hover(function(){
      $(this).append("<button class='save-button'>Save for Later</button>");
    }, function(){
      $(".save-button").remove();
    });
  });
