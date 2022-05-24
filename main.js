var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

var largePicImg = document.querySelector('.display img');

var smallPicImgs = document.querySelectorAll('.library div img');


currentIndex = 0;


function updateImageByIndex(index) {
    currentIndex = index;
    largePicImg.src = smallPicImgs[index].src;
    // document.querySelectorAll('.library div').forEach(function(item){
    //     item.classList.remove('active');
    // })
}

smallPicImgs.forEach(function(img, index){
    img.addEventListener('click', function(){
        updateImageByIndex(index);
        // img.parentElement.classList.add('active')
    });
})



function changePicBackward() {
    if (currentIndex == 0){
        currentIndex = smallPicImgs.length-1;
    } else {
        currentIndex--;
    }
    updateImageByIndex(currentIndex);
}

function changePicForward() {
    if (currentIndex == smallPicImgs.length-1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateImageByIndex(currentIndex);
}


prev.addEventListener('click', changePicBackward);
next.addEventListener('click', changePicForward);