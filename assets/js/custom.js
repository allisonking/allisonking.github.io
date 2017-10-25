$('#more-button').click(function () {
  var button = $(this);
    $('#more-info').slideToggle('2000',"swing", function () {
      console.log(button.text());
      if(button.text() == 'more'){
         button.text('less');
     } else {
         button.text('more');
     }
    });
});
