//Global 
let div = null;
//Create onload-Handelar
window.onload = () =>{
    main();
};

function main(){
    const root = document.getElementById("root");
    const chngBG = document.getElementById("chngBG");
    const output = document.getElementById("output");
    const btnCpy = document.getElementById("btnCpy");
    //this is for copy btn
    btnCpy.addEventListener("click", function(){
        navigator.clipboard.writeText(output.value);
        //check div if div is here then,
        if(div !== null){
            div.remove();
            div = null;
        }
        // alert("Sucessfully Copied The color code!");
        generateToasMessage(`${output.value} copied`);

        
    });
    //this is for change bg color
    chngBG.addEventListener("click", function(){
        const bgColorChange = generateColor();
        root.style.backgroundColor = bgColorChange;
        output.value = bgColorChange;
    });

};

//step 2 - random color generator function
function generateColor(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    // return "rgb(" + r + ","+ g +","+ b +")";
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
};

//generate Toas Message function
function generateToasMessage(msg){
    div = document.createElement("div");
    div.innerHTML = msg;
    div.className = "toastMessage toastMessageSlideIn";
    
    
    div.addEventListener("click", function(){
        div.classList.remove("toastMessageSlideIn");
        div.classList.add("toastMessageSlideOut");
        //remove dinamic div
        div.addEventListener("animationend", function(){
            div.remove();
            div = null;
        });
    });
    document.body.appendChild(div);
}

//step 3 - collect all necessary references

// step 4 - handle the click event