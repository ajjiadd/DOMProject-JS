
window.onload = () => {
     main();
};


function main(){
    const root = document.getElementById("root");
    const chngBG = document.getElementById("chngBG");

    chngBG.addEventListener("click", function(){
        // console.log("click the button");
        const color = genarateRGBcolor();
        root.style.backgroundColor = color;
    });

};


function genarateRGBcolor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random()* 256);
    return "rgb(" + r + ","+g+","+b+")";
};