function setResetButton(){
    let reset = document.getElementById('reset');
    reset.addEventListener('click', function(){
        window.confirm('Are u sure u wanna reset ?');
        window.location.reload();
    })

}