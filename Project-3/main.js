
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
       output.value = bgcolor;
   });

   cpyBtn.addEventListener("click", function(){
        
        navigator.clipboard.writeText(output.value);
   });


};


function genarateHexcolor(){
   var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random()* 256);
   return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
};