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
    // widthCheck=true;
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
            // element[0].addEventListener("animationend", function () {
            //     elementII[0].style.display="none";
            //     elementIII[0].style.display="flex";
            //     copyTxt[0].style.display="flex";
            //     elementIV[0].style.height="42.0%";
                
            // });
            checkCon=false;
        break;
        case 3:
            // element[0].style.animation="revScaleContact 1000ms ease-out forwards";
            // elementII[0].style.display="block";
            // elementIII[0].style.display="none";
            // copyTxt[0].style.display="none";
            // elementIV[0].style.height="";
            // checkCon=true;
        break;
    }
    // return checkCon;
    
}
function scaleWork(element, elementII, elementIII, elementIV, situation) {
    switch(situation) {
        case 0:
            if (!checkAbout) {
                contentTwo[0].style.display="none";
                checkAbout=true;
                if (checkWork) {
                    // filler(element, elementII, elementIII, elementIV, 0);
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
                element[0].style.animation="revScaleContact 1000ms ease-out forwards";
                // element[0].addEventListener("animationend", function () {
                //     contentThree[0].style.display="none";
                //     copyTxt[0].style.display="none";
                //     elementIV[0].style.height="";
                // });
                // element[0].removeEventListener("animationend");
                
                checkCon=true;
                if (checkWork) {
                    // element[0].addEventListener("animationend", function () {
                    //     filler(element, elementII, elementIII, elementIV, 0);
                    // });
                    // element[0].removeEventListener("animationend");
                    
                }
            } else if (checkWork) {
                filler(element, elementII, elementIII, elementIV, 0);
            } else {
                filler(element, elementII, elementIII, elementIV, 1);
            }
        break;
        case 1:
            // console.log("Check I:\t\t"+checkAbout);
            if (!checkWork) {
                elementIV[0].classList.toggle("active");
                contentOne[0].style.display="none";
                element[0].style.animation="reverseProj 1000ms ease-out forwards";
                // element[0].addEventListener("animationend", function () {
                //     elementIV[0].classList.toggle("active");
                //     contentOne[0].style.display="none";
                // });
                checkWork=true;
                element[0].removeEventListener("animationend");
            }
            if (!checkCon) {
                contentThree[0].style.display="none";
                copyTxt[0].style.display="none";
                checkCon=true;
                element[0].style.animation="revScaleContact 1000ms ease-out forwards";
                // element[0].addEventListener("animationend", function () {
                //     contentThree[0].style.display="none";
                //     copyTxt[0].style.display="none";
                //     checkCon=true;
                // });
                element[0].removeEventListener("animationend");
                // contentThree[0].style.display="none";
                // copyTxt[0].style.display="none";
                // checkCon=true;
            }
            if (checkAbout) {
                elementII[0].style.display="none";
                elementIII[0].style.display="flex";
                elementIII[0].innerHTML="\n\tThank you for your curiosity.\n\n\tI am a 25 year old website developer eager to gt a job in the field. I studied at Miami University of Ohio and am currently enrolled in OSU's Coding Bootcamp.";
                checkAbout=false;
                // console.log("Check II:\t\t"+checkAbout);
            } else if (!checkAbout) {
                elementII[0].style.display="block";
                elementIII[0].style.display="none";
                checkAbout=true;
                // console.log("Check III:\t\t"+checkAbout);
            }
            // console.log("Check IV:\t\t"+checkAbout);
        break;
        case 2:
            workToCont=true;
            console.log("\nAbout\t\t%s\nWork\t\t%s\nCont\t\t%s", checkAbout, checkWork, checkCon);
            if (!checkAbout) {
                contentTwo[0].style.display="none";
                checkAbout=true;
                if (checkCon) {
                    filler(element, elementII, elementIII, elementIV, 2);
                }
                console.log("\n\tCheck\t%s\n\tT/F\t", "I", checkCon);
            } else if (!checkWork) {
                element[0].style.animation="reverseProj 1000ms ease-out forwards";
                // elementIII[0].style.animation="conVis 10000ms ease-in fowards";
                elementIV[0].classList.toggle("active");
                contentOne[0].style.display="none";
                checkWork=true;
                if (checkCon) {
                    contacts[0].style.animation="conVis 6000ms ease-in fowards";
                    // element[0].addEventListener("animationend", workToCon(element, elementII, elementIII, elementIV));
                    // elementIII[0].style.animation="conVis 10000ms ease-in fowards";
                    element[0].style.animation="reverseProj 1000ms ease-in forwards";
                    element[0].onanimationend=function() {
                        if (workToCont) {
                            element[0].style.animation="scaleContact 1000ms ease-in forwards";
                            // contacts[0].style.animation="conVis 3000ms ease-in fowards";
                            // console.log(contacts[0].style);
                            // elementII[0].style.display="none";
                            // elementIII[0].style.display="flex";
                            // // elementIII[0].style.animation="conVis 10000ms ease-in fowards";
                            // copyTxt[0].style.display="flex";
                            // elementIV[0].style.height="42.0%";
                            return workToCont=false;
                        } else {
                            contacts[0].style.animation="conVis 3000ms ease-in fowards";
                            elementII[0].style.display="none";
                            elementIII[0].style.display="flex";
                            // elementIII[0].style.animation="conVis 10000ms ease-in fowards";
                            copyTxt[0].style.display="flex";
                            elementIV[0].style.height="42.0%";
                        }
                        // element[0].style.animation="scaleContact 1000ms ease-in forwards";
                        // // contacts[0].style.animation="conVis 3000ms ease-in fowards";
                        // console.log(contacts[0].style);
                        // elementII[0].style.display="none";
                        // elementIII[0].style.display="flex";
                        // // elementIII[0].style.animation="conVis 10000ms ease-in fowards";
                        // copyTxt[0].style.display="flex";
                        // elementIV[0].style.height="42.0%";
                    }
                    // element[0].onanimationstart=function() {
                    //     elementIII[0].style.animation="conVis 10000ms ease-in fowards";
                    // }
                    // let myPromise=new Promise(function(element, elementII, elementIII, elementIV){
                    //     element[0].style.animation="workToCon 2000ms ease-in forwards";
                    // });
                    // myPromise.then(function(elementII, elementIII, elementIV){
                    //     elementII[0].style.display="none";
                    //     elementIII[0].style.display="flex";
                    //     copyTxt[0].style.display="flex";
                    //     elementIV[0].style.height="42.0%";
                    // });
                    // element[0].style.animation="workToCon 2000ms ease-in forwards";
                    // element[0].addEventListener("animationend", function () {
                    //     filler(element, elementII, elementIII, elementIV, 2);
                    //     contentOne[0].style.display="none";
                    // });
                    // element[0].removeEventListener("animationend");
                }
                console.log("\n\tCheck\t%s\n\tT/F\t", "II", checkCon);
            } else if (checkCon) {
                filler(element, elementII, elementIII, elementIV, 2);
                checkCon=false;
                console.log("This should be working\nT/F:\t\t", checkCon);
                console.log("\n\tCheck\t%s\n\tT/F\t", "III", checkCon);
            } else if (!checkCon) {
                // filler(element, elementII, elementIII, elementIV, 3);
                element[0].style.animation="revScaleContact 1000ms ease-out both";
                // element[0].addEventListener("animationend", function () {
                //     elementII[0].style.display="block";
                //     elementIII[0].style.display="none";
                //     copyTxt[0].style.display="none";
                //     elementIV[0].style.height="";
                // });
                // element[0].removeEventListener("animationend");
                checkCon=true;
                console.log("This should be working\nT/F:\t\t", checkCon);
            }
        break;
    }
    
    
}
function workToCon(element, elementII, elementIII, elementIV) {
    elementII[0].style.display="none";
    elementIII[0].style.display="flex";
    copyTxt[0].style.display="flex";
    elementIV[0].style.height="42.0%";
    // element[0].addEventListener("animationend", function(){
    //     element[0].removeEventListener(workToCon());
    // });
    
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
    // element[0].removeEventListener("animationend");
    // elementII[0].style.display="inherit";
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