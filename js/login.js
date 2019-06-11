(function($) {
    
    $('#buttonRegister').on('click', function(){
     var form = $('#formRegister').serializeArray();
     console.log(form);
     console.log('prueba');
     $.ajax({
        type: "POST",
        url: url + 'registrarUsuario',
        data: form,
        success: function(res){
            console.log(res);
        },
        dataType: "json"
    });
 })
    
})(jQuery);/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


