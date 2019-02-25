$(function() {

    // adds new tasks
    addActionItem = () => {
        let newActionItem = $('#newActionItem').val(); 
        $('#task-list').append(`<li class='action-item incomplete'>${newActionItem}</li>`); 
        $('#newActionItem').val('');
    }; 

    // marks completed tasks
    $(document).on('click', '.action-item', function(){
        $(this).removeClass('incomplete').addClass('completed'); 
    }); 

    // clear completed tasks
    clearCompletedTasks = () => $('.completed').remove(); 
}); 