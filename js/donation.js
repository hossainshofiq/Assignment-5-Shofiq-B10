
document.getElementById('toggle-donation-btn').addEventListener ('click', function(event){
    toggleButton ('donation-cards');
    toggleBtnColor (event.target.id);
})

document.getElementById('toggle-history-btn').addEventListener ('click', function(event){
    toggleButton ('donation-history');
    toggleBtnColor (event.target.id);
})