import './style.css'

let allTheTiles = document.querySelector(".allTheTiles");

const octavePattern="bnbnbbnbnbnb"
let octaves_count = 2;



for (let i = 0; i < octaves_count; i++) {

  for (let j = 0; j < octavePattern.length; j++) {

    if (octavePattern[j] + octavePattern[j+1] === "bn") {

      console.log(octavePattern[j])
      let whiteTile = document.createElement("div");
      whiteTile.classList.add("white");
      allTheTiles.appendChild(whiteTile);
    
      let blackTile = document.createElement("div");
      blackTile.classList.add("black");
      whiteTile.appendChild(blackTile);
      
    
    } else if(octavePattern[j] + octavePattern[j+1] === "bb"){

      let whiteTile = document.createElement("div");
      whiteTile.classList.add("white");
      allTheTiles.appendChild(whiteTile);

    }
     
  }
  let whiteTile = document.createElement("div");
      whiteTile.classList.add("white");
      allTheTiles.appendChild(whiteTile);
  
}
let whiteTile = document.createElement("div");
whiteTile.classList.add("white");
allTheTiles.appendChild(whiteTile);

  
let isMapping = false;

if(isMapping === true){}
  
 