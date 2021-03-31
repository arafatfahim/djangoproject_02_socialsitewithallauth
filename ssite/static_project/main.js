$(document).ready(function(){
    console.log('hello')
    $('#modal-btn').click(function(){
        $('.ui.modal')
        .modal('show');
    })
    $('.ui.dropdown').dropdown()
})