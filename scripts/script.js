$(function(){

	if(!(jQuery.browser.msie && jQuery.browser.version == 7.0)){
	//START AJAX
	var loadpage = function(url){
		url = url.length > 2 ? url.substr(1) : 'index.php';
		$('.main').load(url+' .main');
	}

	var pageUrl = window.location.href;
	sharPos = pageUrl.indexOf('#');
	if(sharPos){
		loadpage(pageUrl.substr(sharPos));
		pageUrl = pageUrl.substr(0,sharPos);
	}

	$('nav#main-menu a').click(function(){

		$('html ,body').animate({
	 		scrollTop: $("div.slide").offset().top
		}, 1000);

		var url = $(this).attr('href');
		window.location.href = pageUrl + '#' + url;
		return false;
	});

	window.onhashchange = function(){
		loadpage(window.location.hash);
	}
	//END AJAX
	}
});