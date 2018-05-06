
$(document).ready(function(){

	$("#nav_1").click(function () {
	    $('html, body').animate({
	        scrollTop: $("#jumbek2").offset().top
	    }, 2000);
	});
	$("#nav_2").click(function () {
	    $('html, body').animate({
	        scrollTop: $("#mySkills").offset().top
	    }, 2000);
	});
	$("#nav_3").click(function () {
	    $('html, body').animate({
	        scrollTop: $("#contact").offset().top
	    }, 2500);
	});
});


// PAWEŁ MMMMMMMMMMMMMMMMMMMMMMM
$(document).ready(function(){
	$("#me").fadeToggle(4000);
});
///////////////////////////////////

// ROBIE TO Z PASJIIIIIIIIIIIIIIII
$(document).ready(function(){
	$("#making").slideToggle(2500);
});
//////////////////////////////////

//KILKA SŁÓW O MNIEEEEEEEEEEEEEEEEE
// $("#jumbek2").hover(function(){
// 	$("#words").fadeToggle(4000);
// });
//////////////////////////////////

//OPISSSSSSSSSSSSSSSSSSSSSSSSSSSS
$("#jumbek2").hover(function(){
	$("#oMnie").slideDown(4000);
});
///////////////////////////////////

//ARROWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
$(document).ready(function(){
   // Delay the action by 10000ms
   setTimeout(function(){
      // Display the div containing the class "bottomdiv"
      $("#wrappArrow").slideToggle(1000);
   }, 3000);
});
//////////////////////////////////////


