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

      <!--removing items from list-->
      $("#remove_item").click(function(){
        var completed = $("#done");
        $("#complete").append("<li>" + completed + "</li>");
        $(".done").remove();
      });
