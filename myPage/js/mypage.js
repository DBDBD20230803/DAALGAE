const addPetBtn = document.querySelector(".addPet");
const dogInfo = document.querySelector(".dogInfo");

addPetBtn.addEventListener('click', function() {
    dogInfo.style.display = 'block';
});

const spreadBtn1 = document.querySelector(".spreadBtn1");
const spreadBtn2 = document.querySelector(".spreadBtn2");

spreadBtn1.addEventListener('click', function() {
    if( spreadBtn2.style.display == 'block' ){
        spreadBtn1.style.display = 'none';
        dogInfo.style.display = 'block';
        spreadBtn2.style.display ='block';
    }else{
        spreadBtn2.style.display = 'block';
    }
   
});