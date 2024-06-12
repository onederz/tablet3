const images = [...document.querySelectorAll('.image')];

// popup

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0; // will track our current image;

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    })
})

const updateImage = (i) => {
    let path = `img/standarddbl${i+1}.jpg`;
    largeImage.src = path;
    imageIndex.innerHTML = `0${i+1}`;
    index = i;
}

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})

leftArrow.addEventListener('click', () => {
    if(index > 0){
        updateImage(index - 1);
    }
})

rightArrow.addEventListener('click', () => {
    if(index < images.length - 1){
        updateImage(index + 1);
    }
})

// second pop up

const images2 = [...document.querySelectorAll('.image2')];

const popup2 = document.querySelector('.popup2');
const closeBtn2 = document.querySelector('.close-btn2');
const imageName2 = document.querySelector('.image-name2');
const largeImage2 = document.querySelector('.large-image2');
const imageIndex2 = document.querySelector('.index2');
const leftArrow2 = document.querySelector('.left-arrow2');
const rightArrow2 = document.querySelector('.right-arrow2');

let index2 = 0; // will track our current image;

images2.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage2(i);
        popup2.classList.toggle('active');
    })
})

const updateImage2 = (i) => {
    let path = `img/standardtw${i+1}.jpg`;
    largeImage2.src = path;
    imageIndex2.innerHTML = `0${i+1}`;
    index2 = i;
}

closeBtn2.addEventListener('click', () => {
    popup2.classList.toggle('active');
})

leftArrow2.addEventListener('click', () => {
    if(index2 > 0){
        updateImage2(index2 - 1);
    }
})

rightArrow2.addEventListener('click', () => {
    if(index2 < images2.length - 1){
        updateImage2(index2 + 1);
    }
})

// third pop up

const images3 = [...document.querySelectorAll('.image3')];

const popup3 = document.querySelector('.popup3');
const closeBtn3 = document.querySelector('.close-btn3');
const imageName3 = document.querySelector('.image-name3');
const largeImage3 = document.querySelector('.large-image3');
const imageIndex3 = document.querySelector('.index3');
const leftArrow3 = document.querySelector('.left-arrow3');
const rightArrow3 = document.querySelector('.right-arrow3');

let index3 = 0; // will track our current image;

images3.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage3(i);
        popup3.classList.toggle('active');
    })
})

const updateImage3 = (i) => {
    let path = `img/deluxe${i+1}.jpg`;
    largeImage3.src = path;
    imageIndex3.innerHTML = `0${i+1}`;
    index3 = i;
}

closeBtn3.addEventListener('click', () => {
    popup3.classList.toggle('active');
})

leftArrow3.addEventListener('click', () => {
    if(index3 > 0){
        updateImage3(index3 - 1);
    }
})

rightArrow3.addEventListener('click', () => {
    if(index3 < images3.length - 1){
        updateImage3(index3 + 1);
    }
})

// firth pop up

const images4 = [...document.querySelectorAll('.image4')];

const popup4 = document.querySelector('.popup4');
const closeBtn4 = document.querySelector('.close-btn4');
const imageName4 = document.querySelector('.image-name4');
const largeImage4 = document.querySelector('.large-image4');
const imageIndex4 = document.querySelector('.index4');
const leftArrow4 = document.querySelector('.left-arrow4');
const rightArrow4 = document.querySelector('.right-arrow4');

let index4 = 0; // will track our current image;

images4.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage4(i);
        popup4.classList.toggle('active');
    })
})

const updateImage4 = (i) => {
    let path = `img/superiordbl${i+1}.jpg`;
    largeImage4.src = path;
    imageIndex4.innerHTML = `0${i+1}`;
    index4 = i;
}

closeBtn4.addEventListener('click', () => {
    popup4.classList.toggle('active');
})

leftArrow4.addEventListener('click', () => {
    if(index4 > 0){
        updateImage4(index4 - 1);
    }
})

rightArrow4.addEventListener('click', () => {
    if(index4 < images4.length - 1){
        updateImage4(index4 + 1);
    }
})

// fifth pop up

const images5 = [...document.querySelectorAll('.image5')];

const popup5 = document.querySelector('.popup5');
const closeBtn5 = document.querySelector('.close-btn5');
const imageName5 = document.querySelector('.image-name5');
const largeImage5 = document.querySelector('.large-image5');
const imageIndex5 = document.querySelector('.index5');
const leftArrow5 = document.querySelector('.left-arrow5');
const rightArrow5 = document.querySelector('.right-arrow5');

let index5 = 0; // will track our current image;

images5.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage5(i);
        popup5.classList.toggle('active');
    })
})

const updateImage5 = (i) => {
    let path = `img/superiortw${i+1}.jpg`;
    largeImage5.src = path;
    imageIndex5.innerHTML = `0${i+1}`;
    index5 = i;
}

closeBtn5.addEventListener('click', () => {
    popup5.classList.toggle('active');
})

leftArrow5.addEventListener('click', () => {
    if(index5 > 0){
        updateImage5(index5 - 1);
    }
})

rightArrow5.addEventListener('click', () => {
    if(index5 < images5.length - 1){
        updateImage5(index5 + 1);
    }
})

// 4-bed pop up

const images6 = [...document.querySelectorAll('.image6')];

const popup6 = document.querySelector('.popup6');
const closeBtn6 = document.querySelector('.close-btn6');
const imageName6 = document.querySelector('.image-name6');
const largeImage6 = document.querySelector('.large-image6');
const imageIndex6 = document.querySelector('.index6');
const leftArrow6 = document.querySelector('.left-arrow6');
const rightArrow6 = document.querySelector('.right-arrow6');

let index6 = 0; // will track our current image;

images6.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage6(i);
        popup6.classList.toggle('active');
    })
})

const updateImage6 = (i) => {
    let path = `img/4beddorm${i+1}.jpg`;
    largeImage6.src = path;
    imageIndex6.innerHTML = `0${i+1}`;
    index6 = i;
}

closeBtn6.addEventListener('click', () => {
    popup6.classList.toggle('active');
})

leftArrow6.addEventListener('click', () => {
    if(index6 > 0){
        updateImage6(index6 - 1);
    }
})

rightArrow6.addEventListener('click', () => {
    if(index6 < images6.length - 1){
        updateImage6(index6 + 1);
    }
})

// 6-bed pop up

const images7 = [...document.querySelectorAll('.image7')];

const popup7 = document.querySelector('.popup7');
const closeBtn7 = document.querySelector('.close-btn7');
const imageName7 = document.querySelector('.image-name7');
const largeImage7 = document.querySelector('.large-image7');
const imageIndex7 = document.querySelector('.index7');
const leftArrow7 = document.querySelector('.left-arrow7');
const rightArrow7 = document.querySelector('.right-arrow7');

let index7 = 0; // will track our current image;

images7.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage7(i);
        popup7.classList.toggle('active');
    })
})

const updateImage7 = (i) => {
    let path = `img/6beddorm${i+1}.jpg`;
    largeImage7.src = path;
    imageIndex7.innerHTML = `0${i+1}`;
    index7 = i;
}

closeBtn7.addEventListener('click', () => {
    popup7.classList.toggle('active');
})

leftArrow7.addEventListener('click', () => {
    if(index7 > 0){
        updateImage7(index7 - 1);
    }
})

rightArrow7.addEventListener('click', () => {
    if(index7 < images7.length - 1){
        updateImage7(index7 + 1);
    }
})

// change price standard double 

document.getElementById("btn").onclick = function() {
    var input = document.getElementById("moveData").value; // <-- this line
    document.getElementById("p1").innerHTML = input;
}

document.getElementById("moveData").value = getSavedValue("moveData");    // set the value to this input
        /* Here you can add more inputs to set value. if it's saved */

        //Save the value function - save it to localStorage as (ID, VALUE)
        function saveValue(e){
            var id = e.id;  // get the sender's id to save it . 
            var val = e.value; // get the value. 
            localStorage.setItem(id, val);// Every time user writing something, the localStorage's value will override . 
        }

        //get the saved value function - return the value of "v" from localStorage. 
        function getSavedValue  (v){
            if (!localStorage.getItem(v)) {
                return "";// You can change this to your defualt value. 
            }
            return localStorage.getItem(v);
        }