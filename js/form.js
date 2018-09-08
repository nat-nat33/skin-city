var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbx2tIMSOhuXXOMNjZd_3tFPWCLaKfCbmLick6LUHjcbEG8JUKM/exec';

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var data = $form.serialize();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: data
  }).success(function(){
       console.log('obj', data);
  }
    // do something
   
  );
})


// function postToGoogle() {
//     console.log('I ran bitch!');
//     var field1 = $("#email").val();
//     var field2 = $('#name').val();
//     var field3 = $('#message').val();
 
//     $.ajax({
//       url: "https://docs.google.com/forms/d/e/1FAIpQLScM7HnRDsU27Zoz02R4zrt93MA12nIHi7ffziwxEIqFCoShZQ/formResponse",
//       data: {
//         "entry.emailAddress": field1,
//         "entry.1581515726": field2,
//         "entry.1303776299": field3
//       },
//       type: "POST",
//       dataType: "xml",
//       statusCode: {
//         0: function() {
//           //Success message
//           alert('Done SON!');
//         },
//         200: function() {
//           //Success Message
//         }
//       }
//     });
//   }
 
 /* $(document).ready(function() {
    $('#form').submit(function() {
      postToGoogle();
      return false;
    });
    
 });*/