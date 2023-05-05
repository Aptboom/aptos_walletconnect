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
    localStorage.setItem("wallet_type", "Petra");
    //const account = await wallet.account();
    //console.log(account);
  } catch (error) {
   
  }
  }
  else if (wall_type == "w_mar"){
    localStorage.setItem("wallet_type", "Martian");
    const response = await window.martian.connect();
    console.log(response.address);
  }
  else if (wall_type == "w_pon"){
    
    detectProvider()
    .then(async provider => {
      try {
        const account = await provider.connect();
        console.log(account.address);
        localStorage.setItem("wallet_type", "Pontem");
      } catch (e) {
        console.log(e); 
      }
    })
  }
  else if (wall_type == "w_ris"){
    localStorage.setItem("wallet_type", "Rise");
    const response = await window.rise.connect()
    console.log(response.address);
  }
  else if (wall_type == "w_spa"){
    localStorage.setItem("wallet_type", "Spacecy");
    const response = await window.spacecy.connect();
    
    const account = await window.spacecy.account();
    console.log(account);
    
  }
  else {
    localStorage.setItem("wallet_type", "Unidentified");
    console.log("Wallet Unidentified");
  }
}
window.switch_wallet = switch_wallet;

/******/ })()
;