const loadText=document.querySelector('.loadingtext');
const bg=document.querySelector('.bg');
let load=0;
let seenu=setInterval(blurring,30);
function blurring()
{
    load++;
    if(load>99)
    {
        clearInterval(seenu);
    }
    loadText.innerText= `${load}%`;
    loadText.style.opacity=scale(load,0,100,1,0);
    bg.style.filter=`blur(${scale(load,0,100,30,0)}px)`;
}
function scale (number, inMin, inMax, outMin, outMax)
{
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
/*
https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
*/