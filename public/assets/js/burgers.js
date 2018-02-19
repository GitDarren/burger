// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $(".change-status").on("click", function(event) {
      var id = $(this).data("id");
      var newstatus = $(this).data("devour");
  
      var newBurgerStatus = {
        devoured: newstatus
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/"+id, {
        type: "PUT",
        data: newBurgerStatus
      }).done(
        function() {
          console.log("changed burger status to", newBurgerStatus);
          // Reload the page to get the updated list
          // location.reload();
        }).fail(function(status, error) {
            console.log(error);
        })
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#burger").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).done(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }).fail(function (status, error)  {
          console.log(error);
        })
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/"+id, {
        type:"DELETE"
      }).done(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }).fail(function (status, error)  {
          console.log(error);
        })
    });
  });
  