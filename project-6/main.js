

//globals variable for div
let div = null;



window.onload = () => {
    main();
};


function main(){
   const root = document.getElementById("root");
   const chngBG = document.getElementById("chngBG");
   const output = document.getElementById("output");
   const cpyBtn = document.getElementById("cpyBtn");

   chngBG.addEventListener("click", function(){

       // console.log("click the button");
       const bgcolor = genarateHexcolor();
       root.style.backgroundColor = bgcolor;
       output.value = bgcolor.substring(1);
   });

   cpyBtn.addEventListener("click", function(){

    //copy the outPut vaule
        navigator.clipboard.writeText(`#${output.value}`);

    //div check
    if(div != null){
        div.remove();
        div = null;
    }
    //call the function
        // genarateTostmsg(`${output.value} copied`); 

    // check the valid Color code and copy 
    if(isValidHEX(output.value)){
        genarateTostmsg(`#${output.value} copied`);
    }else{
        alert("Invalid Color code");
    }

   });

   output.addEventListener("keyup", function(e){
    const color = e.target.value;
    if(color){
        output.value = color.toUpperCase()
        if(isValidHEX(color)){
            root.style.backgroundColor = `#${color}`
        }
    }
   });


};


function genarateHexcolor(){
   var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random()* 256);
   return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
};

function genarateTostmsg(msg){
    div = document.createElement('div');
    div.innerText = msg;
    div.className = "tostMsg tostMsg-slide-animation-in";

    //remove the tostMsg
    div.addEventListener("click", function(){
        div.classList.remove('tostMsg-slide-animation-in');
        div.classList.add('tostMsg-slide-animation-out');

        div.addEventListener("animationend", function(){
            div.remove();
            div = null;
        })
    });
    document.body.appendChild(div)
}


// Check the Right color code 
/** 
  @param {string} color 
 */
function isValidHEX(color){
    if(color.length !== 6) return false;
    //check 1st character
    // if(color[0] !== "#") return false;

    
    // create sub-string substract the # 
    // color = color.substring(1)

    //create Regular Expression
    return /^[0-9A-Fa-f]{6}$/i.test(color)
}