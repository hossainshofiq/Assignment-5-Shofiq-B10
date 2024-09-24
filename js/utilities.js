function toggleButton (id) {
    document.getElementById ('donation-cards').classList.add ('hidden');
    document.getElementById ('donation-history').classList.add ('hidden');
    document.getElementById (id).classList.remove ('hidden');
}

function toggleBtnColor (id) {
    document.getElementById ('toggle-history-btn').classList.add('bg-transparent', 'border');
    document.getElementById ('toggle-donation-btn').classList.add('bg-transparent', 'border');
    document.getElementById (id).classList.remove('bg-transparent', 'border');
    document.getElementById (id).classList.add('bg-btn-color');
}

function getValueFromInnerText (id) {
    return parseFloat(document.getElementById(id).innerText);
}

function getStringFromInnerText (id) {
    return document.getElementById(id).innerText;
}


function setValueToInnerText (id, value) {
    return parseFloat(document.getElementById (id).innerText = value);
}

function getValueFromInputField(id) {
    const x = document.getElementById(id).value;
    if (x === "" || isNaN(x)) {
        return NaN;
    } else {
        return parseFloat(x);
    }
}


function donationBtnAction (id, userWallet, donatedAmount, areaTitle) {
    let currentDonationBalance = getValueFromInnerText (id);

    if (isNaN(donatedAmount)) {
        alert ('Invalid input: Please enter a valid amount!');
    }
    else if (donatedAmount < 0) {
        alert ('Invalid input: A negative amount cannot be donated!');
    }
    else if (donatedAmount === 0) {
        alert ('Invalid input: No amount found, Please enter a valid amount!');
    }
    else if (userWallet > 0 && donatedAmount <= userWallet) {
        userWallet = userWallet - donatedAmount;
        currentDonationBalance = currentDonationBalance + donatedAmount;

        setValueToInnerText('user-wallet', userWallet);
        setValueToInnerText(id, currentDonationBalance);
        my_modal_1.showModal();

        const currentTime = new Date().toString();
        
        // Modal box
        const divImport = document.createElement ('div');
        divImport.innerHTML = 
                `<div class="card bg-base-100 border-2">
                    <div class="card-body">
                      <h2 class="card-title">${donatedAmount} Taka is Donated for ${areaTitle}.</h2>
                      <p>Date : ${currentTime}</p>
                    </div>
                </div>`
        document.getElementById('no-donation-history').classList.add('hidden');
        document.getElementById('donation-history').appendChild(divImport);
    }
    else {
        alert ('Insufficient balance!');
    }
}


