$(document).ready(function(){
  $("#taskBar").keydown(function(e){
    if (e.which==13){//enter key is pressed
      addTask();

    }
  });
  $("button").click(function(){
    addTask();
    saveTask();
  });
   
  function addTask(){
    let taskInput = $("#textBar").val().trim();
    if(taskInput === ""){
      alert("You must write something!");
    }
    else{
      let newTask = $("<li></li>").text(taskInput);
      newTask.append('<span class="delete"> <i class="fa-regular fa-trash-can"></i></span>');
  
  $('#taskItems').append(newTask);
  $('#textBar').val("");

  newTask.click(function(){
    $(this).toggleClass('checked');
  });

  newTask.find('.delete').click(function(event){
    $(this).parent().remove();
    event.stopPropagation();
    saveTask();
  });
  saveTask();
};

}
});

 
