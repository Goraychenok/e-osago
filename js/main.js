jQuery(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
    });
});

	//form
	$('.popup-btn').on('click',  function(event) {
		event.preventDefault();
		$('.popup').fadeIn();
		$('body').addClass('stop');
    });
    $('.modal-btn').on('click',  function(event) {
		event.preventDefault();
		$('.modal').fadeIn();
		$('body').addClass('stop');
    }); 

    $(document).mouseup(function (e){ // событие клика по веб-документу
        var popup = $(".popup-dialog"); // тут указываем ID элемента
        var close = $(".popup-close");
        var modal = $("#modal-dialog");
        var closeTwo = $(".modal-close");
        $('body').addClass('stop');
        if (!popup.is(e.target) && !modal.is(e.target) && modal.has(e.target).length === 0 // если клик был не по нашему блоку
            && popup.has(e.target).length === 0 // и не по его дочерним элементам
            || close.is(e.target)) { 
                $('body').addClass('stop');
                event.preventDefault();
                $('.popup').fadeOut();
                $('body').removeClass('stop');
        }
        $('body').addClass('stop');
        if (!modal.is(e.target) && !popup.is(e.target) // если клик был не по нашему блоку
        && modal.has(e.target).length === 0 // и не по его дочерним элементам
        || closeTwo.is(e.target)) {
            $('body').addClass('stop'); 
            event.preventDefault();
            $('.modal').fadeOut();
            $('body').removeClass('stop');
    }
    });
    
    $('form').submit(function(event) {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Сообщение успешно отправлено");
            $("form").trigger("reset");
            event.preventDefault();
            $('.popup').fadeOut();
            $('.modal').fadeOut();
            $('body').removeClass('stop');
        });
        return false;
    });


function slowScroll(id){
    var offset = 60;
    $('html,body').animate ({
        scrollTop: $(id).offset ().top - offset
    },1000);
    $('body').removeClass('lock');
    $('.header__burger,.header__menu').removeClass('active');
    return false;
}