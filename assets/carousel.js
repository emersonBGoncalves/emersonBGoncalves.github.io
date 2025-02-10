const imgs = document.getElementById("imgCarousel");
const botoesCarousel = document.getElementsByClassName("botoesCarousel");
const carousel = document.getElementsByClassName("carousel");

let idx = 0;
let qtd_imgs = 0;

$(document).ready(function(){
	$(".projects").click(function(e){
		e.stopPropagation();
		initCarousel($(this).data("imgs"), e.pageX, e.pageY);
	});

	$(".leftCarousel").click(function(e){
		e.stopPropagation();
		if($(this).css("opacity") > 0)
		{
			if(idx == 0)
				idx = qtd_imgs-1;
			else
				idx--;

			$(".rightCarousel").css('opacity', 1).removeClass('noCursor');
			imgs.style.transform = `translateX(${-idx * 640}px)`;
			botoesCarousel[0].style.transform = `translateX(${idx * 640}px)`;
		}
	});

	$(".rightCarousel").click(function(e){
		e.stopPropagation();
		if($(this).css("opacity") > 0)
		{
			if(idx == qtd_imgs -1)
				idx = 0;
			else
				idx++;
			
			
			$(".leftCarousel").css('opacity', 1).removeClass('noCursor');
			imgs.style.transform = `translateX(${-idx * 640}px)`;
			botoesCarousel[0].style.transform = `translateX(${idx * 640}px)`;
		}
	});


	$("body").click(function(e){
		if(!$(e.target).hasClass("botoesCarousel") && 
			!$(e.target).hasClass("rightCarousel") && 
			!$(e.target).hasClass("leftCarousel") && 
			$(".carousel").is(":visible"))
		{
			$(".carousel").fadeOut();
		}
	});

	function initCarousel(imgs_split, posx, posy){
		$(".carousel img").remove();
		var imgs_split = imgs_split.split(',');
		qtd_imgs = imgs_split.length;
		idx = 0;

		imgs.style.transform = `translateX(${-idx * 640}px)`;
		botoesCarousel[0].style.transform = `translateX(${idx * 640}px)`;


		for(var i = 0; i < qtd_imgs; i++){
			$(".containerCarousel").append('<img src="images/' + imgs_split[i] + '">');
		}
		
		$(".carousel").fadeIn();
		
		posx = posx + 20;
		posy = posy - 180;
		$(".carousel").css("top", `${posy}px`)
		$(".carousel").css("left", `${posx}px`)
	}
});