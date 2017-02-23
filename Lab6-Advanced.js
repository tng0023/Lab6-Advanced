$(document).ready(function(){
    //button to add item to list
    $("#new_item_html_string").click(function(){
      var task = $('#task').val();
      //if nothing is entered, create an error, else add task
      if(task.length == 0){
          alert('Please enter a task!')
        }
        else{
          $("#to_do").append("<li>" + task + "</li>");
          $("#task").val("");
        }
        });
      //toggle the line through done items
      $("li").click(function(){
        $(this).toggleClass("done");
      });

      <!--move done items-->
      $("#move_item").click(function(){
        $(".done").fadeOut(1000);
        move("#to_do","#complete");
      });
      //move items from list to table
      function move(origin, dest){
        var orginListElements = $(origin).find("li").not("to_do");

        if(orginListElements.length == 0){
          return;
        }

        var lastElement = orginListElements.find(".animated");

        var destinationList = $(dest);

        var date = new Date($.now());

        var formatted = date.getHours() + ":" + date.getMinutes()+ ":" + date.getSeconds();


        destinationList.append(lastElement);
        destinationList.append(formatted);
      }

});
