$(document).ready(function () {
  $('.myCard').click(function () {
    event.preventDefault();
    var id1 = this.id;
    $('.myCard').click(function () {
      event.preventDefault();
      var id2 = this.id;
      console.log(id2);
      console.log(id1);
      $.post( "goofSpiel", { first: id1, second: id2 } );
    });
  });

});