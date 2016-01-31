$(':text').focus(function(){
        $(this).val('').attr('placeholder','');
    }).focusout(function(){
        $(this).val('').attr('placeholder','Введите название товара');
    });