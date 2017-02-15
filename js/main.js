function main() {
  $('.bio1').hide();
  $('.bio1').fadeIn(5000);
  
}

main();

$(document).ready(function(){
    $(".li").click(function(){
        $(".collapse").collapse('hide');
    });
}); //trying to get navbar collapse away after select on mobile but this not working