$(document).ready(function(){

    $("#new_item_html_string").click(function(){
      var task = $('#task').val();

      if(task.length == 0){
          alert('Please enter a task!')
        }
        else{
          $("#to_do").append("<li>" + task + "</li>");
          $("#task").val("");
        }
        });

      $("li").click(function(){
        $(this).toggleClass("done");
      });

      <!--move done items-->
      $("#move_item").click(function(){
        move("#to_do","#complete");
      });

      function move(origin, dest){
        var orginListElements = $(origin).find("li");

        if(orginListElements.length == 0){
          return;
        }

        var lastElement = orginListElements.last();

        var destinationList = $(dest);

        var date = new Date($.now());

        var formatted = date.getHours() + ":" + date.getMinutes()+ ":" + date.getSeconds();

        destinationList.append(lastElement);
        destinationList.append(formatted);
      }

});
