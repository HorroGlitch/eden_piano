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

navigator.permissions.query({ name: "midi", sysex: true }).then((result) => {
  if (result.state === "granted") {
    // Access granted.
  } else if (result.state === "prompt") {
    // Using API will prompt for permission
  }
  // Permission was denied by user prompt or permission policy
});

let midi = null; // global MIDIAccess object
function onMIDISuccess(midiAccess) {
  console.log("MIDI ready!");
  midi = midiAccess; // store in the global (in real usage, would probably keep in an object instance)
}

function onMIDIFailure(msg) {
  console.error(`Failed to get MIDI access - ${msg}`);
}

navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);

function listInputsAndOutputs(midiAccess) {
  for (const entry of midiAccess.inputs) {
    const input = entry[1];
    console.log(
      `Input port [type:'${input.type}']` +
        ` id:'${input.id}'` +
        ` manufacturer:'${input.manufacturer}'` +
        ` name:'${input.name}'` +
        ` version:'${input.version}'`,
    );
  }

  for (const entry of midiAccess.outputs) {
    const output = entry[1];
    console.log(
      `Output port [type:'${output.type}'] id:'${output.id}' manufacturer:'${output.manufacturer}' name:'${output.name}' version:'${output.version}'`,
    );
  }
}

function onMIDIMessage(event) {
  let str = `MIDI message received at timestamp ${event.timeStamp}[${event.data.length} bytes]: `;
  for (const character of event.data) {
    str += `0x${character.toString(16)} `;
  }
  console.log(str);
}

function startLoggingMIDIInput(midiAccess) {
  midiAccess.inputs.forEach((entry) => {
    entry.onmidimessage = onMIDIMessage;
  });
}

let buttonMapping = document.querySelector(".isMapping")  
let isMapping = false;

let childrenTiles = allTheTiles.children;

buttonMapping.addEventListener("click",()=>{
 buttonMapping.disabled = true;
 alert("Watch out! You're actually mapping.")
})

if(isMapping === true){}
  
 