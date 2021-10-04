let string1 = `Flatiron School <br/><a href="https://flatironschool.com/" target="_blank">Click Here</a>`;
let string2 = `Mozilla Developer Network <br><a href="https://developer.mozilla.org/" target="_blank">Click Here</a>`;
let string3 = `Google JS Style Guide <br /> <a href="https://google.github.io/styleguide/jsguide.html" target="_blank">Click Here</a>`;
let img1 = `<img src="./images/flatiron_logo.png" width=100px />`
let img2 = `<img src="./images/mozilla_logo.PNG" width=100px />`
let img3 = `<img src="./images/goog.png" width=100px />`


let slideshowArr = [
    {text: string1,
    bgcolor: '#000',
    color: '#FFF',
    img: img1}, 
    {text: string2,
    bgcolor: '#000',
    color: '#FFF',
    img: img2   
    }, 
    {text: string3,
    bgcolor: '#EFEFEF',
    color: '#000',
    img: img3}
];

function fillBoxes(){
    let leftbox = document.getElementById("leftbox");
    let centerbox = document.getElementById("centerbox");
    let rightbox = document.getElementById("rightbox");
    leftbox.innerHTML = slideshowArr[0].img;
    centerbox.style = `background-color:${slideshowArr[1].bgcolor}; color: ${slideshowArr[1].color}`;
    centerbox.innerHTML = slideshowArr[1].img+'<br />'+slideshowArr[1].text;
    rightbox.innerHTML = slideshowArr[2].img;
}


function moveLeft(){
    let newRight = slideshowArr[0];
    slideshowArr.shift();
    slideshowArr.push(newRight);
    fillBoxes();
}


function moveRight(){
    let newLeft = slideshowArr[2];
    slideshowArr.pop();
    slideshowArr.unshift(newLeft);
    fillBoxes();
}



document.getElementById("leftarrow").addEventListener('click', moveLeft);
document.getElementById("rightarrow").addEventListener('click', moveRight);


// set each text to a variable, use array methods push pop etc to move it arround