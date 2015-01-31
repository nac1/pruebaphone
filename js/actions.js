/*

var fn = {
    ready: function(){
     //agregar al final 'deviceready'
         alert('123');
         document.addEventListener('deviceready',fn.init,false);
        
    },
    init: function(){   
        alert('1234');
        $('#contact').tap(fn.agregar_contacto);
        
       // $('#regSend').click(fn.enviarRegistro);
    //    $('#regFoto').click(capture.imgCapture);
        
        
        
        /*if(!storage.estaRegistrado())
            window.location.href = '#reg';
    },
    agregar_contacto:function(){
    contactos.creado();
   }

};

$(fn.ready);
*/


    // Wait for device API libraries to load
    //
    function onLoad() {
        alert("1");
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    // device APIs are available
    //
    function onDeviceReady() {
        // Now safe to use device APIs
         alert("2");
    }


