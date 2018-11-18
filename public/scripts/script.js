
/*
$(document).ready(function () {
  event.preventDefault()
  $(".myCard").click(function() {
    alert('jquery fired')
    var id = this.id
    $.post( "/goofSpiel", function( data ) {
      $({ id: id})
    });
});
// });
// */

// $(document).ready(function () {
//   $('#register').click(function () {
//     console.log($('.email')[0].value);
//     let insertValue = {
//       email: $('.email')[0].value,
//       password: $('.email')[1].value
//     };
//     knex('users')
//       .insert(insertValue)
//       .into("users")
//       .finally(function() {
//         knex.destroy();
//       });
//   });
// });