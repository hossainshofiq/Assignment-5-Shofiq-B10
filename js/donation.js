
document.getElementById('toggle-donation-btn').addEventListener ('click', function(event){
    toggleButtonAction ('donation-cards');
    toggleBtnColorAction (event.target.id);
})

document.getElementById('toggle-history-btn').addEventListener ('click', function(event){
    toggleButtonAction ('donation-history');
    toggleBtnColorAction (event.target.id);
})

document.getElementById('donation-btn-noakhali').addEventListener ('click', function(){
    const donatedAmount = getValueFromInputField('input-donation-noakhali');
    let userWallet = getValueFromInnerText ('user-wallet');
    const areaTitle = getStringFromInnerText('noakhali');
    donationBtnAction ('noakhali-initial-balance', userWallet, donatedAmount, areaTitle);    
   })


document.getElementById('donation-btn-feni').addEventListener ('click', function(){
    const donatedAmount = getValueFromInputField('input-donation-feni');
    let userWallet = getValueFromInnerText ('user-wallet');
    const areaTitle = getStringFromInnerText('feni');
    donationBtnAction ('feni-initial-balance', userWallet, donatedAmount, areaTitle);     
})


document.getElementById('donation-btn-quota').addEventListener ('click', function(){
    const donatedAmount = getValueFromInputField('input-donation-quota');
    let userWallet = getValueFromInnerText ('user-wallet');
    const areaTitle = getStringFromInnerText('quota-protest');
    donationBtnAction ('quota-initial-balance', userWallet, donatedAmount, areaTitle);     
})