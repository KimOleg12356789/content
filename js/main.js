$(document).ready(function () {

$('.select').on('click','li',function(){
      $('#opened').click();
      var $t = $(this),
          $f = $('.field')
          text = $t.html(),
          drop = $t.find('a').attr('class');
      $f.find('label').html(text);
      $f.find('a').attr('class',drop)
    });
    $('.field').click(function(e){
      e.preventDefault();
      $('#opened').click();
    })
});


 $("label.seltext").on("click", function (e) {

    $('label.seltext').toggleClass('active')

});

 $('.select.is').on('click','li',function(){
      $('#openeds').click();
      var $t = $(this),
          $f = $('.field')
          text = $t.html(),
          drop = $t.find('a').attr('class');
      $f.find('label').html(text);
      $f.find('a').attr('class',drop)
    });
    $('.field').click(function(e){
      e.preventDefault();
      $('#openeds').click();
    })


 $("label.seltext").on("click", function (e) {

    $('label.seltext').toggleClass('active')

});



    

    var dropdown = $("span.js-dropdown");

    $(document).ready(function () {
        $("a.js-dropdown__toggle").on("click", function (e) {
            $(this).parent().toggleClass("is-active");
            return false;
        })
    });


    $(document).ready(function () {
        $("span.js-dropdown.is-active").on("click", function (e) {
            $(this).parent().removeClass("is-active")
        })
    });

     $(document).ready(function () {
        $("a#modul-1").on("click", function (e) {
           $('.modul-1').css('display','block');
           $('body').css('overflow','hidden')
        });
     });

     $(document).ready(function () {
        $("a#modul-2").on("click", function (e) {
           $('.modul-2').css('display','block');
           $('body').css('overflow','hidden')
        });
     });

     $(document).ready(function () {
        $("a#modul-3").on("click", function (e) {
           $('.modul-3').css('display','block');
           $('body').css('overflow','hidden')
        });
     });

     $(document).ready(function () {
        $("a#modul-4").on("click", function (e) {
           $('.modul-4').css('display','block');
           $('body').css('overflow','hidden')
        });
     });

     $(document).ready(function () {
        $("a#modul-5").on("click", function (e) {
           $('.modul-5').css('display','block');
           $('body').css('overflow','hidden')
        });
     });

     $(document).ready(function () {
        $("a#modul-6").on("click", function (e) {
           $('.modul-6').css('display','block');
           $('body').css('overflow','hidden')
        });
     });

     $(document).ready(function () {
        $("a#modul-6").on("click", function (e) {
           $('.modul-6').css('display','block');
           $('body').css('overflow','hidden')
        });
     });

     $(document).ready(function () {
        $("a#modul-7").on("click", function (e) {
           $('.modul-7').css('display','block');
           $('body').css('overflow','hidden')
        });
     });

     $(document).ready(function () {
        $("a#modul-8").on("click", function (e) {
           $('.modul-8').css('display','block');
           $('body').css('overflow','hidden')
        });
     });

     $(document).ready(function () {
        $("a#modul-9").on("click", function (e) {
           $('.modul-9').css('display','block');
           $('body').css('overflow','hidden')
        });
     });

     $(document).ready(function () {
        $("a#modul-11").on("click", function (e) {
           $('.modul-11').css('display','block');
           $('body').css('overflow','hidden')
        });
     });

     $(document).ready(function () {
        $("a#modul-10").on("click", function (e) {
           $('.modul-10').css('display','block');
           $('body').css('overflow','hidden')
        });
     });

     $(document).ready(function () {
        $(".close").on("click", function (e) {
           $('.modul-1').css('display','none');
           $('.modul-2').css('display','none');
           $('.modul-5').css('display','none');
           $('.modul-6').css('display','none');
           $('.modul-8').css('display','none');
           $('.modul-9').css('display','none');
           $('.modul-10').css('display','none');
           $('.modul-11').css('display','none');
           $('body').css('overflow','auto');
        });
     });

      $(document).ready(function () {
        $(".closes").on("click", function (e) {
           $('.modul-3').css('display','none');
           $('.modul-4').css('display','none');
           $('.modul-7').css('display','none');
           $('body').css('overflow','auto');
        });
     });
       


