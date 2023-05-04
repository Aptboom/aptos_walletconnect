/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};

function detectProvider (timeout = 3000) {
  return new Promise((resolve, reject) => {
    if (typeof window.pontem === 'undefined') {
      const timer = setTimeout(reject, timeout)
      window.addEventListener('#pontemWalletInjected', (e) => {
        clearTimeout(timer)
        resolve(e.detail)
      }, { once: true })
    } else {
      resolve(window.pontem)
    }
  })
}


async function switch_wallet() {

  var wall_type = document.getElementById("wall_name").value;
  if (wall_type == "w_pet"){
    const getAptosWallet = () => {
      if ('aptos' in window) {
        return window.aptos;
      } else {
        window.open('https://petra.app/', `_blank`);
      }
    };
    const wallet = getAptosWallet();
  try {
    const response = await wallet.connect();
    console.log(response.address); 
  
    //const account = await wallet.account();
    //console.log(account);
  } catch (error) {
   
  }
  }
  else if (wall_type == "w_mar"){
    const response = await window.martian.connect();
    console.log(response.address);
  }
  else if (wall_type == "w_pon"){
    detectProvider()
    .then(async provider => {
      try {
        const account = await provider.connect();
        console.log(account.address);
        
      } catch (e) {
        console.log(e); 
      }
    })
  }
  else if (wall_type == "w_ris"){
    const response = await window.rise.connect()
    console.log(response.address);
  }
  else if (wall_type == "w_spa"){
    const response = await window.spacecy.connect();
    
    const account = await window.spacecy.account();
    console.log(account);
    
  }
  else {
    console.log("Wallet Unidentified");
  }
}
window.switch_wallet = switch_wallet;

/******/ })()
;