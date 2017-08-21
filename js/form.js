
$(document).ready(function () {

    var zipValidation = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i;

    $( ".required" ).focusout(function() {
        if($(this).attr('id')==='zipcode'){
            if(!zipValidation.test($(this).val())){
                $(this).addClass('incorrect');   
            }else {
                $(this).removeClass('incorrect'); 
            }
        }else {
            validate(this);
        }
    })
    $( "#birth" ).change(function() {
        validate('.date');
    })

    function validate(ele) {
        if ($(ele).val().length < 1) $(ele).addClass('incorrect');        
        else $(ele).removeClass('incorrect'); 
    }

    $('form').submit(function () {
        $( "#form-details .form-control" ).each( function( index, element ){
            validate(this);
        });
        if (!$('.incorrect').length){ 
            $(".message").html('<div class="alert alert-success" role="alert">Form submitted correctly</div>');
            return false;
        } else return false;
    });
    $('#birth').datepicker({autoclose: true, viewMode: 'years'});

    $('.btn-toggle').click(function () {
        $(this).find('.btn').toggleClass('active');
        if ($(this).find('.btn-primary').length > 0) {
            $(this).find('.btn').toggleClass('btn-primary');
        }
        $(this).find('.btn').toggleClass('btn-default');
    });

});