
    var fullName = document.getElementById('addName');
    var firstName = document.getElementById('userSureName');
    var lastName = document.getElementById('userName');
    var thirdName = document.getElementById('userPatronymic');
    var age = document.getElementById('addAge');
    var realAge = document.getElementById('userAge');
    var ageDay = document.getElementById('addAgeDay');
    var gender = document.getElementById('addGender');
    var haveAge = document.getElementById('addRetirementAge');
    var sendBtn = document.getElementById('button-input');
    var closeBtn = document.getElementById('button-close');
    var openModal = document.querySelector('.modal-window');
    var age_benefit_woman = 56;
    var age_benefit_man = 61;
    
    
sendBtn.addEventListener('click', function(event) {
    openModal.classList.toggle('open');
});

closeBtn.addEventListener('click', function(event) {
    openModal.classList.remove('open');
})


sendBtn.addEventListener('click', function() {
    age.innerHTML = ' ' + realAge.value; 
    fullName.innerHTML = ' ' + firstName.value + ' ' + lastName.value + ' ' + thirdName.value;
    ageDay.innerHTML = ' ' + realAge.value*365;

     if ((document.getElementById('GenderMan').checked) && (realAge.value < age_benefit_man)) {
        haveAge.innerHTML = ' ' + 'Нет';
    } else if ((document.getElementById('GenderMan').checked) && (realAge.value >= age_benefit_man)) {
        haveAge.innerHTML = ' ' + 'Да';
    } else if ((document.getElementById('GenderWoman').checked) && (realAge.value < age_benefit_woman)) {
        haveAge.innerHTML = ' ' + 'Нет';
    } else {
        haveAge.innerHTML = ' ' + 'Да';
    }
    if(document.getElementById('GenderMan').checked) {
        gender.innerHTML = 'Мужской';
    }else if(document.getElementById('GenderWoman').checked) {
        gender.innerHTML = 'Женский';
    }
}); 


