
fill=document.querySelector("#fill");

var i=0;
var txt="";
async function fetchapi(){
    txt="";
  
    const word=document.querySelector(".input").value ;
    if(word==""){
        document.querySelector(".er-activate").classList.remove("none");
    }
    else{
        document.querySelector(".er-activate").classList.add("none");
       fill.innerHTML=`<div class="loader">
       <div class="square" id="sq1"></div>
       <div class="square" id="sq2"></div>
       <div class="square" id="sq3"></div>
       <div class="square" id="sq4"></div>
       <div class="square" id="sq5"></div>
       <div class="square" id="sq6"></div>
       <div class="square" id="sq7"></div>
       <div class="square" id="sq8"></div>
       <div class="square" id="sq9"></div>
     </div>
       `
        document.querySelector("#fill").classList.remove('none');
        // console.log(word);
        const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        try{
            const result= await fetch(url);
            const res2=await result.json();
             txt=(res2[0].meanings[0].definitions[0].definition);
           i=0;
           document.querySelector("#fill").innerHTML="";
             typewriter();
        }
      catch{
        fill.innerHTML="error! this word have no meaning";
      }
    }
}


function typewriter(){
    
    if(i<txt.length){
        fill.innerHTML+=txt.charAt(i);
        i++;
        setTimeout(typewriter,20);
    }




}

window.addEventListener("keydown",(e)=>{
if(e.key=="Enter"){
    fetchapi();
}
});




