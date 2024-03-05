$( document ).ready(function() {

	$(".arrow").click(function(){
		
		if($(this).hasClass('arrowUp'))
		{
			$(this).removeClass('arrowUp');
			hideShowParents($(this).parent().parent().next(), false, 0);
		}
		else
		{
			$(this).addClass('arrowUp');
			hideShowParents($(this).parent().parent().next(), true);
		}

	});

	function hideShowParents(este, hide = false, recurive = 1){
		if($(este).next('tr').length > 0 && (recurive || $(este).hasClass('trSon'))) {
			hideShowParents($(este).next('tr'), hide);
		}

		if(hide)
		{
			$(este).children().children('.arrow').addClass('arrowUp');
			$(este).addClass('hide');
		}
		else
		{
			$(este).removeClass('hide');
		}

	}

	$("body").on('click', '.aba', function(e){
		$(".aba").addClass("inactive");
		$(".aba").removeClass("active");
		$(this).addClass("active").removeClass("inactive");
		
		$(".trSon").removeClass("active");
		$(".trSon[data-html=" + $(this).data("html") + "]").addClass("active");
		
		alteraHtml($(this).data("html"));
	});

	$("body").on('click', '.close', function(e){
		e.stopPropagation();

		var active = $(this).parent().hasClass("active");

		$(this).parent().remove();

		if(active)
		{
			$(".trSon").removeClass("active");
			if($(".aba").length > 0)
			{
				$($(".aba")[0]).addClass("active").removeClass("inactive");
				alteraHtml($($(".aba")[0]).data("html"));
				
				$(".trSon[data-html=" + $($(".aba")[0]).data("html") + "]").addClass("active");
			}
		}

		if($(".aba").length == 0)
			alteraHtml('Nada');
	});

	$(document).on('mousedown', '.aba',  function(e){

		if(event.which === 2){
			e.stopPropagation();

			var active = $(this).hasClass("active");

			$(this).remove();

			if(active)
			{
				$(".trSon").removeClass("active");
				if($(".aba").length > 0)
				{
					$($(".aba")[0]).addClass("active").removeClass("inactive");
					alteraHtml($($(".aba")[0]).data("html"));
					
					$(".trSon[data-html=" + $($(".aba")[0]).data("html") + "]").addClass("active");
				}
			}

			if($(".aba").length == 0)
				alteraHtml('Nada');
		}
	});

	$(".trSon").click(function(){
		$(".trSon").removeClass("active");
		$(this).addClass("active");
		$(".aba").addClass("inactive");
		$(".aba").removeClass("active");
		
		if($(".aba[data-html=" + $(this).data("html") + "]").length > 0)
		{
			$($(".aba[data-html=" + $(this).data("html") + "]")).addClass("active").removeClass("inactive");
		}
		else
		{
			$(".abas").append('' +
					'<div class="aba active" data-html="' + $(this).data("html") + '">' +
					'	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.3873 7.1575L11.9999 12L3.60913 7.14978" stroke="#C2185B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12V21" stroke="#C2185B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 2.57735C11.6188 2.22008 12.3812 2.22008 13 2.57735L19.6603 6.42265C20.2791 6.77992 20.6603 7.44017 20.6603 8.1547V15.8453C20.6603 16.5598 20.2791 17.2201 19.6603 17.5774L13 21.4226C12.3812 21.7799 11.6188 21.7799 11 21.4226L4.33975 17.5774C3.72094 17.2201 3.33975 16.5598 3.33975 15.8453V8.1547C3.33975 7.44017 3.72094 6.77992 4.33975 6.42265L11 2.57735Z" stroke="#C2185B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>' +
					'	' + $(this).data("html") + '.class' +
					'	<svg class="close" width="184px" height="184px" viewBox="0 0 1024.00 1024.00" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="6.144"></g><g id="SVGRepo_iconCarrier"><path fill="#D3D3D3" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></g></svg>					' +
					'</div>'
			);
		}

		alteraHtml($(this).data("html"));
		$(".trSon[data-html=" + $(this).data("html") + "]").addClass("active");
	});

	$( "#sortable" ).sortable({
      revert: true,
	  axis: "x"
    });

	$(".conteudo").each(function( index ) {
		$(this).find('p').length;
		for(var i = 1; i <= ($(this).find('p').length > 40 ? $(this).find('p').length : 40); i++)
		{
			$(this).prev().append('<p class="dark">' + i + '</p>');	
		}
	});

	$('.miniFoto').click(function () {
		var $img = $(this);
		$('#divLargerImage').html($img.clone().width(500).removeClass("miniFoto")).add($('#divOverlay')).fadeIn();
	});

	$("body").click(function(e){
		if(!$(e.target).hasClass("miniFoto") && $("#divLargerImage").is(":visible"))
		{
			$('#divLargerImage').add($('#divOverlay')).fadeOut(function () {
				$('#divLargerImage').empty();
			});
		}
	});

	$(".circles").each(function( index ) {
		var preenchidos = $(this).data('qtd');
		for(var i = 1; i <= 5; i++)
		{
			var classe = "";
			if(preenchidos > 0)
			{
				classe = 'preenchido';
				preenchidos--;
			}

			$(this).append('<div class="circle ' + classe + '"></div>');	
		}
	});

	function alteraHtml(html)
	{
		$(".archives").hide();
		$("." + html).show();
	}
});