document.addEventListener("contextmenu", function(e) {
  // e.preventDefault();
  // document.body.appendChild(overlay);
},false)

document.addEventListener("keydown", function(e) {
  if(e.ctrlKey || e.keyCode == 91){
    document.body.appendChild(overlay);
  }
});

document.addEventListener('keyup', function (e) {
  var keyCode = e.keyCode ? e.keyCode : e.which;
  if (keyCode == 44) {
    disablePrntScr();
    document.body.appendChild(overlay);
    
  }
});
function disablePrntScr() {
  var inpFld = document.createElement("input");
  inpFld.setAttribute("value", "");
  inpFld.style.position = "fixed";
  inpFld.style.left = "-1000px";
  document.body.appendChild(inpFld);
  inpFld.select();
  document.execCommand("copy");
  inpFld.remove(inpFld);
}


let overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100vw';
overlay.style.height = '100vh';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 1)'; // Adjust the transparency
overlay.style.zIndex = '9999';
overlay.style.pointerEvents = 'none'; // Allow interactions behind the overlay

// JavaScript to show the overlay
function showOverlay() {
  document.getElementById('mobileOverlay').style.display = 'block';
}

// JavaScript to hide the overlay
function hideOverlay() {
  document.getElementById('mobileOverlay').style.display = 'none';
}

// Example usage: show overlay on touchstart, hide on touchend
document.addEventListener('touchstart', showOverlay);
document.addEventListener('touchend', hideOverlay);

window.addEventListener('screenshot', function() {
  alert('Screenshots are not allowed on this site.');
  document.body.appendChild(overlay);
  // Additional logic to hide or blur content
});

function clearAllPDFs() {
  const pdfContainers = document.querySelectorAll('.pdf-container');
  pdfContainers.forEach(container => {
    container.classList.remove('container');
  });
}
var literature = document.querySelector("#Lit");
var lang = document.querySelector("#Lang");
var maths = document.querySelector("#Maths");
var physics = document.querySelector("#Physics");
var biology= document.querySelector("#Biology");
var chemistry = document.querySelector("#Chemistry");
var his = document.querySelector("#his");
var geography = document.querySelector("#Geography");
var class_name = document.querySelector("#class_name");

var pdfweb = document.querySelector("#pdfs_web");
var WebBtn =  document.querySelector("#WebBtn");

var pdfai = document.querySelector("#pdfs_ai");
var aibtn = document.querySelector("#aiBtn");

var pdfcyber = document.querySelector("#pdfs_cyber");
var cyberbtn = document.querySelector("#cyberBtn");

var pdfcloud = document.querySelector("#pdfs_cloud");
var cloudbtn = document.querySelector("#cloudBtn");

var pdfViewer = document.querySelector("#pdfViewerContainer");

let passwordCorrect = false;

function blockLit(){
  clearAllPDFs();
  document.getElementById("backButton").classList.add('hidden');
  document.getElementById("class_name").innerText=" Subject : Literature";
  // class_name.innerHTML = "literature";
  // Check if the content is already displayed
  if (literature.style.display === "inline-block") {
    // If the content is already displayed, do nothing or just focus on the content
    return;
  }

  document.getElementById('submitPassword').onclick = function() {
    const password = document.getElementById('password').value;
    const correctPassword = '1'; // Set your desired password here
    
    if (password === correctPassword) {
      literature.style.display="inline-block";
      
      // document.getElementById('links').classList.remove('hidden');
      document.getElementById('passwordPrompt').classList.add('hidden');
      document.getElementById('backButton').classList.remove('hidden');
      document.getElementById('passwordPrompt').classList.remove('container');
      passwordCorrect = true;
    } else {
      alert('Incorrect password');
    }
  };
  lang.style.display="none"
  maths.style.display="none"
  physics.style.display="none"
  biology.style.display="none"
  chemistry.style.display="none"
  his.style.display="none"
  geography.style.display="none"
  pdfViewer.style.display = "none"
  document.getElementById('passwordPrompt').classList.add('container');
  document.getElementById('passwordPrompt').classList.remove('hidden');
  document.getElementById('password').value = '';
  
  
}
function blockLang(){
  clearAllPDFs();
  document.getElementById("backButton").classList.add('hidden');
  document.getElementById("class_name").innerText=" Subject : Language";
  // Check if the content is alread displayed
  if (lang.style.display === "inline-block") {
    // If the content is already displayed, do nothing or just focus on the content
    return;
  }
  document.getElementById('submitPassword').onclick =  function() {
    const password = document.getElementById('password').value;
    const correctPassword = 'lang1234'; // Set your desired password here
    
    if (password === correctPassword) {
      lang.style.display="inline-block";
      
      // document.getElementById('links').classList.remove('hidden');
      document.getElementById('passwordPrompt').classList.add('hidden');
      document.getElementById('backButton').classList.remove('hidden');
      document.getElementById('passwordPrompt').classList.remove('container');
    } else {
      alert('Incorrect password');
    }
  };
  literature.style.display="none";
  maths.style.display="none"
  physics.style.display="none"
  biology.style.display="none"
  chemistry.style.display="none"
  his.style.display="none"
  geography.style.display="none"
  pdfViewer.style.display = "none"
  document.getElementById('passwordPrompt').classList.remove('hidden');
  document.getElementById('passwordPrompt').classList.add('container');
  document.getElementById('password').value = '';
  
}

function blockMaths(){
  clearAllPDFs();
  document.getElementById("backButton").classList.add('hidden');
  document.getElementById("class_name").innerText=" Subject : Maths";
  // Check if the content is already displayed
  if (maths.style.display === "inline-block") {
    // If the content is already displayed, do nothing or just focus on the content
    return;
  }
  document.getElementById('submitPassword').onclick =  function() {
    const password = document.getElementById('password').value;
    const correctPassword = 'math123'; // Set your desired password here
    
    if (password === correctPassword) {
      maths.style.display="inline-block"
      // document.getElementById('links').classList.remove('hidden');
      document.getElementById('passwordPrompt').classList.add('hidden');
      document.getElementById('backButton').classList.remove('hidden');
      document.getElementById('passwordPrompt').classList.remove('container');
    } else {
      alert('Incorrect password');
    }
  };
  lang.style.display="none"
  literature.style.display="none";
  physics.style.display="none"
  biology.style.display="none"
  chemistry.style.display="none"
  his.style.display="none"
  geography.style.display="none"
  pdfViewer.style.display = "none"
  document.getElementById('passwordPrompt').classList.remove('hidden');
  document.getElementById('passwordPrompt').classList.add('container');
  document.getElementById('password').value = '';
  
}
function blockPhy(){
  clearAllPDFs();
  document.getElementById("backButton").classList.add('hidden');
  document.getElementById("class_name").innerText=" Subject : Physics";
  // Check if the content is already displayed
  if (physics.style.display === "inline-block") {
    // If the content is already displayed, do nothing or just focus on the content
    return;
  }
  document.getElementById('submitPassword').onclick =  function() {
    const password = document.getElementById('password').value;
    const correctPassword = 'phy123'; // Set your desired password here
    
    if (password === correctPassword) {
      physics.style.display="inline-block"
      // document.getElementById('links').classList.remove('hidden');
      document.getElementById('passwordPrompt').classList.add('hidden');
      document.getElementById('backButton').classList.remove('hidden');
      document.getElementById('passwordPrompt').classList.remove('container');
    } else {
      alert('Incorrect password');
    }
  };
  maths.style.display="none"
  lang.style.display="none"
  literature.style.display="none";
  biology.style.display="none"
  chemistry.style.display="none"
  his.style.display="none"
  geography.style.display="none"
  pdfViewer.style.display = "none"
  document.getElementById('passwordPrompt').classList.remove('hidden');
  document.getElementById('passwordPrompt').classList.add('container');
  document.getElementById('password').value = '';
  
}
function blockBio(){
  clearAllPDFs();
  document.getElementById("backButton").classList.add('hidden');
  document.getElementById("class_name").innerText=" Subject : Biology";
  // Check if the content is already displayed
  if (biology.style.display === "inline-block") {
    // If the content is already displayed, do nothing or just focus on the content
    return;
  }
  document.getElementById('submitPassword').onclick = function() {
    const password = document.getElementById('password').value;
    const correctPassword = 'bio123'; // Set your desired password here
    
    if (password === correctPassword) {
      biology.style.display="inline-block"
      // document.getElementById('links').classList.remove('hidden');
      document.getElementById('passwordPrompt').classList.add('hidden');
      document.getElementById('backButton').classList.remove('hidden');
      document.getElementById('passwordPrompt').classList.remove('container');
    } else {
      alert('Incorrect password');
    }
  };
  physics.style.display="none"
  maths.style.display="none"
  lang.style.display="none"
  literature.style.display="none";
  chemistry.style.display="none"
  his.style.display="none"
  geography.style.display="none"
  pdfViewer.style.display = "none"
  document.getElementById('passwordPrompt').classList.remove('hidden');
  document.getElementById('passwordPrompt').classList.add('container');
  document.getElementById('password').value = '';
 
}
function blockChem(){
  clearAllPDFs();
  document.getElementById("backButton").classList.add('hidden');
  document.getElementById("class_name").innerText=" Subject : Chemistry";
  // Check if the content is already displayed
  if (chemistry.style.display === "inline-block") {
    // If the content is already displayed, do nothing or just focus on the content
    return;
  }
  document.getElementById('submitPassword').onclick = function() {
    const password = document.getElementById('password').value;
    const correctPassword = 'chem123'; // Set your desired password here
    
    if (password === correctPassword) {
      chemistry.style.display="inline-block"
      // document.getElementById('links').classList.remove('hidden');
      document.getElementById('passwordPrompt').classList.add('hidden');
      document.getElementById('backButton').classList.remove('hidden');
      document.getElementById('passwordPrompt').classList.remove('container');
    } else {
      alert('Incorrect password');
    }
  };
  biology.style.display="none"
  physics.style.display="none"
  maths.style.display="none"
  lang.style.display="none"
  literature.style.display="none";
  his.style.display="none"
  geography.style.display="none"
  pdfViewer.style.display = "none"
  document.getElementById('passwordPrompt').classList.remove('hidden');
  document.getElementById('passwordPrompt').classList.add('container');
  document.getElementById('password').value = '';
  
}
function blockHis(){
  clearAllPDFs();
  document.getElementById("backButton").classList.add('hidden');
  document.getElementById("class_name").innerText=" Subject : History";
  // Check if the content is already displayed
  if (his.style.display === "inline-block") {
    // If the content is already displayed, do nothing or just focus on the content
    return;
  }
  
  document.getElementById('submitPassword').onclick = function() {
    const password = document.getElementById('password').value;
    const correctPassword = 'his123'; // Set your desired password here
    
    if (password === correctPassword) {
      his.style.display="inline-block"
      // document.getElementById('links').classList.remove('hidden');
      document.getElementById('passwordPrompt').classList.add('hidden');
      document.getElementById('backButton').classList.remove('hidden');
      document.getElementById('passwordPrompt').classList.remove('container');
    } else {
      alert('Incorrect password');
    }
    
  };
  chemistry.style.display="none"
  biology.style.display="none"
  physics.style.display="none"
  maths.style.display="none"
  lang.style.display="none"
  literature.style.display="none";
  geography.style.display="none"
  pdfViewer.style.display = "none"
  document.getElementById('passwordPrompt').classList.remove('hidden');
  document.getElementById('passwordPrompt').classList.add('container');
  document.getElementById('password').value = '';

}
function blockGeo(){
  clearAllPDFs();
  document.getElementById("backButton").classList.add('hidden');
  document.getElementById("class_name").innerText=" Subject : Geography";
  // Check if the content is already displayed
  if (geography.style.display === "inline-block") {
    // If the content is already displayed, do nothing or just focus on the content
    return;
  }
  document.getElementById('submitPassword').onclick = function() {
    const password = document.getElementById('password').value;
    const correctPassword = 'geo123'; // Set your desired password here
    
    if (password === correctPassword) {
      geography.style.display="inline-block"
      // document.getElementById('links').classList.remove('hidden');
      document.getElementById('passwordPrompt').classList.add('hidden');
      document.getElementById('backButton').classList.remove('hidden');
      document.getElementById('passwordPrompt').classList.remove('container');
      hideAllExcept(geography);
      passwordCorrect = true;
    } else {
      alert('Incorrect password');
    }
  };
  
  his.style.display="none"
  chemistry.style.display="none"
  biology.style.display="none"
  physics.style.display="none"
  maths.style.display="none"
  lang.style.display="none"
  literature.style.display="none";
  pdfViewer.style.display = "none"
  document.getElementById('passwordPrompt').classList.remove('hidden');
  document.getElementById('passwordPrompt').classList.add('container');
  document.getElementById('password').value = '';
  hideAllExcept(geography);

}



WebBtn.onclick = function(){
  clearAllPDFs()
  pdfweb.classList.add('container');
  pdfweb.style.display = 'flex'
}

aibtn.onclick = function(){
  clearAllPDFs()
  pdfai.classList.add('container');
}

cloudbtn.onclick = function(){
  clearAllPDFs();
  pdfcloud.classList.add('container');
}

cyberbtn.onclick = function(){
  clearAllPDFs();
  pdfcyber.classList.add('container');
}
function hideAllContent() {
  var allContent = document.querySelectorAll('#Lit, #Lang, #Maths, #Physics, #Biology, #Chemistry, #his, #Geography,#pdfViewerContainer');
  allContent.forEach(function(element) {
    element.classList.add('hidden');
  });
}


document.addEventListener("DOMContentLoaded", function () {
  const pdfViewerContainer = document.getElementById("pdfViewerContainer");
  const pdfViewer = document.getElementById("pdfViewer");
  
  // Links and their corresponding PDF paths
  const pdfLinks = {
    "Web Dev Introduction": "LabAssignment (1+3).pdf",
    "Web Dev Part-I": "files/Alpha Questions.pdf",
    "Web Dev Main Course": "files/AYMAN-RANI-BIRLA-INVOICE.pdf",
    "Web Dev Main Explanation": "files/conclusion (economics topic 2).pdf",
    "Web dev most important part": "files/webdev_important.pdf",
    "Web Dev Last Part": "files/webdev_last.pdf"
  };
  
  // Get all anchor tags inside pdfs_web div
  const pdfButtons = document.querySelectorAll("#pdfs_web a");
  
  // Add click event listeners to each link
  pdfButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default link behavior
      
      const pdfName = button.textContent.trim(); // Get the text of the link
      const pdfPath = pdfLinks[pdfName]; // Get the corresponding PDF path
      
      if (pdfPath) {
        // const pdfSrcWithToolbarDisabled = `${pdfPath}#toolbar=0`;
        // Show the iframe and load the PDF
        pdfViewerContainer.classList.remove("hidden");
        pdfViewerContainer.style.display = "block"
        pdfViewer.src = pdfPath; // Set the PDF path in the iframe src
      } else {
        alert("PDF not available for this topic.");
      }
    });
  });
});

// document.querySelector('#backButton').onclick = function() {
//   var pdfViewer = document.querySelector(".iframe-container")
//   var pdfLit = document.querySelectorAll(".pdf-lit")[0];
// // document.getElementById('backButton').classList.add('hidden');
// if (pdfViewer.style.display === "block" || pdfViewer.style.display === "" ) {
//   pdfViewer.style.display = "none"; // Hide the visible PDF container
//   console.log("The back button is clicked");
// }
// else if( pdfViewer.style.display === "none" );{
//   pdfLit.style.display = "none"; // Hide the visible PDF container
//   console.log("The back button is clicked for the pdflit");
// };
// document.getElementById('password').value = '';
// literature.style.display ="none";
// lang.style.display="none"
// maths.style.display="none"
// physics.style.display="none"
// biology.style.display="none"
// chemistry.style.display="none"
// his.style.display="none"
// geography.style.display="none"

// };

document.querySelector('#backButton').onclick = function() {
  var pdfViewer = document.querySelector(".iframe-container");
  var pdfLit = document.querySelector(".pdf-lit");
  var box = document.querySelector(".box[style*='display: inline-block']");
  var passwordPrompt = document.getElementById('passwordPrompt');
  
  // Step 1: Check if iframe is displayed
  if (!pdfViewer.classList.contains("hidden")) {
    pdfViewer.classList.add("hidden");
    pdfViewer.querySelector('iframe').src = '';
    return;
  }
  
  // Step 2: Check if pdf-lit class is displayed
  if (pdfLit && getComputedStyle(pdfLit).display !== 'none') {
    pdfLit.style.display = 'none';
    return;
  }
  
  // Step 3: Check if any box class is displayed
  if (box) {
    box.style.display = 'none';
    document.getElementById("backButton").classList.add('hidden');
    return;
  }
  
  // Step 4: Check if password prompt is displayed
  if (!passwordPrompt.classList.contains("hidden")) {
    passwordPrompt.classList.add("hidden");
    passwordPrompt.classList.remove("container");
    return;
  }
  
  // If none of the above, reset everything
  document.getElementById('password').value = '';
  
  // hideAllContent();
};



//   var pdfContainers = document.querySelectorAll('.pdf-container');
//   pdfContainers.forEach(function(container) {
//     container.classList.remove('container');
//   });

//   document.getElementById("pdfViewerContainer").classList.add("hidden");
//   document.getElementById("passwordPrompt").classList.add("hidden");
//   document.getElementById("passwordPrompt").classList.remove("container");
// }


