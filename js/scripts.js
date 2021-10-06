const cardScale=document.getElementsByClassName('card');
const contentBase=document.getElementsByClassName("card_body");
const contentOne=document.getElementsByClassName("card_work");
const contentTwo=document.getElementsByClassName("card_about");
const contentThree=document.getElementsByClassName("card_contact");
const copyTxt=document.getElementsByClassName("copyPasta");
const contacts=document.getElementsByClassName("card_contact_me");


var checkWork=true;
var checkAbout=true;
var checkCon=true;
var widthCheck=false;
var workToCont;


var width;
var viewWidth;
function widthFunct() {
    width=((15.63951770486*Math.pow(10, -7)*Math.pow($(window).width(), 2.47427))+347.677)/1920;
    var pixWid=((15.63951770486*Math.pow(10, -7)*Math.pow($(window).width(), 2.47427))+347.677);
    viewWidth=width*100;
    console.log(viewWidth);
    console.log("\nPix:\t\t"+pixWid);
    return viewWidth;
}
window.onresize=cardFunct;
window.onload=cardFunct;
function cardFunct() {
    cardScale[0].style.width=widthFunct()+"vw";
}



function flip(element) {
    element[0].classList.toggle("active");
}
function filler (element, elementII, elementIII, elementIV, situation) {
    switch(situation) {
        case 0:
            element[0].style.animation="scaleProj 1000ms ease-out forwards";
            elementII[0].style.display="none";
            elementIII[0].style.display="flex";
            elementIII[0].style.animation="flexProjs 1000ms ease-in forwards";
            elementIV[0].classList.toggle("active");
            checkWork=false;
        break;
        case 1:
            element[0].style.animation="reverseProj 1000ms ease-out forwards";
            elementII[0].style.display="block";
            elementIII[0].style.display="none";
            elementIV[0].classList.toggle("active");
            checkWork=true;
        break;
        case 2:
            element[0].style.animation="scaleContact 1000ms ease-in forwards";
            elementIV[0].style.height="42.0%";
                
            checkCon=false;
        break;
        case 3:
        break;
    }
    
}
function scaleWork(element, elementII, elementIII, elementIV, situation) {
    switch(situation) {
        case 0:
            if (!checkAbout) {
                contentTwo[0].style.display="none";
                checkAbout=true;
                if (checkWork) {
                    element[0].style.animation="scaleProj 1000ms ease-out forwards";
                    elementII[0].style.display="none";
                    elementIII[0].style.display="flex";
                    elementIII[0].style.animation="flexProjs 1000ms ease-in forwards";
                    elementIV[0].classList.toggle("active");
                    checkWork=false;
                }
            } else if (!checkCon) {
                contentThree[0].style.display="none";
                copyTxt[0].style.display="none";
                elementIV[0].style.height="";
                checkCon=true;
                if (checkWork) {
                    element[0].style.animation="scaleProj 1000ms ease-out forwards";
                    elementII[0].style.display="none";
                    elementIII[0].style.display="flex";
                    elementIII[0].style.animation="flexProjs 1000ms ease-in forwards";
                    elementIV[0].classList.toggle("active");
                    checkWork=false;
                }
            } else if (checkWork) {
                element[0].style.animation="scaleProj 1000ms ease-out forwards";
                elementII[0].style.display="none";
                elementIII[0].style.display="flex";
                elementIII[0].style.animation="flexProjs 1000ms ease-in forwards";
                elementIV[0].classList.toggle("active");
                checkWork=false;
            } else {
                element[0].style.animation="reverseProj 1000ms ease-out forwards";
                elementII[0].style.display="block";
                elementIII[0].style.display="none";
                elementIV[0].classList.toggle("active");
                checkWork=true;
            }
            break;
        case 1:
            console.log("Check I:\t\t"+checkAbout);
            if (!checkWork) {
                element[0].style.animation="reverseProj 1000ms ease-out forwards";
                elementIV[0].classList.toggle("active");
                contentOne[0].style.display="none";
                checkWork=true;
            } else if (!checkCon) {
                element[0].style.animation="revScaleContact 1000ms ease-in forwards";
                contentThree[0].style.display="none";
                copyTxt[0].style.display="none";
                elementIV[0].style.height="";
                checkCon=true;
            }
            if (checkAbout) {
                elementII[0].style.display="none";
                elementIII[0].style.display="flex";
                elementIII[0].style.flexDirection="column";
                elementIII[0].innerHTML="\n\tThank you for your curiosity.\n\n\tI am a 25 year old website developer eager to gt a job in the field. I studied at Miami University of Ohio and am currently enrolled in OSU's Coding Bootcamp.\nPlease find my resume <a href='https://drive.google.com/file/d/1TNQEf2Ii7lHR5edPWl1sKKlwzaXYj6xN/view?usp=sharing'>here</a>";
                checkAbout=false;
                console.log("Check II:\t\t"+checkAbout);
            } else if (!checkAbout) {
                elementII[0].style.display="block";
                elementIII[0].style.display="none";
                checkAbout=true;
                console.log("Check III:\t\t"+checkAbout);
            }
            console.log("Check IV:\t\t"+checkAbout);
            break;
        case 2:
            if (!checkAbout) {
                contentTwo[0].style.display="none";
                checkAbout=true;
                element[0].style.animation="scaleContact 1000ms ease-out forwards";
                if (checkCon) {
                    elementII[0].style.display="none";
                    elementIII[0].style.display="flex";
                    copyTxt[0].style.display="flex";
                    elementIV[0].style.height="42.0%"
                    checkCon=false;
                }
            } else if (!checkWork) {
                element[0].style.animation="workToCon 2000ms ease-out forwards";
                elementIV[0].classList.toggle("active");
                contentOne[0].style.display="none";
                checkWork=true;
                if (checkCon) {
                    elementII[0].style.display="none";
                    elementIII[0].style.display="flex";
                    copyTxt[0].style.display="flex";
                    elementIV[0].style.height="42.0%"
                    checkCon=false;
                }
            } else if (checkCon) {
                element[0].style.animation="scaleContact 1000ms ease-out forwards";
                elementII[0].style.display="none";
                elementIII[0].style.display="flex";
                copyTxt[0].style.display="flex";
                elementIV[0].style.height="42.0%"
                checkCon=false;
            } else {
                elementII[0].style.display="block";
                elementIII[0].style.display="none";
                copyTxt[0].style.display="none";
                elementIV[0].style.height="";
                checkCon=true;
            }
            break;
    }
    
    
}
function workToCon(element, elementII, elementIII, elementIV) {
    elementII[0].style.display="none";
    elementIII[0].style.display="flex";
    copyTxt[0].style.display="flex";
    elementIV[0].style.height="42.0%";
    
}
function hoverProj(element) {
    element[0].style.animation="hoverProj 250ms ease-in forwards";
}
function hoverIcons(element, elementII) {
    element[0].style.animation="hoverIcons 250ms ease-in forwards";
    elementII[0].style.animation="lowerTextSneaky 1ms forwards"
    element[0].addEventListener("animationend", function() {
        elementII[0].style.display="inherit";
    });
}
function reverseHover(element) {
    element[0].style.animation="revHoverProj 250ms ease-out forwards";
}
function hoverReverseIcons(element, elementII) {
    element[0].style.animation="hoverReverseIcons 250ms ease-in forwards";
    elementII[0].style.display="none";
}
function copyText(element) {
    let txt=element[0].dataset.value;
    navigator.clipboard.writeText(txt);
    console.log(txt);
}