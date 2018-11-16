$(document).ready(function () {
  $('.myCard').click(function () {
    event.preventDefault();
    var id1 = this.id;
    $('.myCard').click(function () {
      var id2 = this.id;
      console.log(id2);
      console.log(id1);
    });
  });
});

