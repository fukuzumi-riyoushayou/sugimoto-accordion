$(function() {
    $('.question').click(function() {
        $(this).next('.answer').slideToggle(500);
        $(this).toggleClass('is-open');

        if($('.only-menu').hasClass('is-open')){
            $(this).find('.book-open').html('非表示　<i class="fa-solid fa-book"></i>');
            }else{
            $(this).find('.book-open').html('全文表示<i class="fa-solid fa-book-open"></i>');
        }
    });

    $('.one-question').click(function() {
        $(this).next('.one-answer').slideToggle(500);
        $(this).toggleClass('is-open')
        $('.box-main .one-list .main-one-list .one-question').not($(this)).next('.one-answer').slideUp(500);
        $('.box-main .one-list .main-one-list .one-question').not($(this)).removeClass('is-open');
    });

    $('.nest-first-question').click(function() {
        const $answer = $(this).next('.nest-first-answer');
        $answer.slideToggle(500);
        $(this).toggleClass('is-open');

        if ($(this).hasClass('is-open')) {
        } else {
            $answer.find('.nest-second-answer').slideUp(500);
            $answer.find('.nest-second-question').removeClass('is-open');
        }
    });
    $('.nest-second-question').click(function() {
        $(this).next('.nest-second-answer').slideToggle(500);
        $(this).toggleClass('is-open');
    });
    
    $('.only-menu-close').click(function() {
        $('.only-menu').removeClass('is-open');
        $('.only-answer').slideUp(500);
        $('.book-open').html('全文表示<i class="fa-solid fa-book-open"></i>');
    });

    $('.yokomuki-answer').hide();
    $('.yokomuki-question').click(function() {
        var width = $(window).width();
        if(width > 768) {
            $(this).next('.yokomuki-answer').animate({ width: 'toggle' }, 500);
            $(this).toggleClass('is-open');
            $('.yokomuki-list .main-yokomuki-list .yokomuki-question').not($(this)).next('.yokomuki-answer').animate({ width: 'hide' }, 500);
            $('.yokomuki-list .main-yokomuki-list .yokomuki-question').not($(this)).removeClass('is-open');
        } else {
            $(this).next('.yokomuki-answer').slideToggle(500);
            $(this).toggleClass('is-open');
            $('.yokomuki-list .main-yokomuki-list .yokomuki-question').not($(this)).next('.yokomuki-answer').slideUp(500);
            $('.yokomuki-list .main-yokomuki-list .yokomuki-question').not($(this)).removeClass('is-open');
        }
    });
});
