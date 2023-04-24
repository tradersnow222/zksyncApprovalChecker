document.addEventListener('DOMContentLoaded', async () => {
    const connectWalletButton = document.getElementById('connect-wallet');
    const checkApprovalsButton = document.getElementById('check-approvals');
  
    if (!connectWalletButton || !checkApprovalsButton) {cd 
      console.error('Could not find the required elements on the page.');
      return;
    }
  
    async function connectWallet() {
      if (typeof window.ethereum === 'undefined') {
        alert('MetaMask is not installed!');
        return;
      }
  
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  
      if (accounts.length > 0) {
        // Wallet is connected
        connectWalletButton.innerText = accounts[0].slice(0, 5) + '...' + accounts[0].slice(-5);
        connectWalletButton.dataset.connected = 'true';
      } else {
        // Wallet is disconnected
        connectWalletButton.innerText = 'Connect Wallet';
        connectWalletButton.dataset.connected = 'false';
      }
    }
  
    function disconnectWallet() {
      connectWalletButton.innerText = 'Connect Wallet';
      connectWalletButton.dataset.connected = 'false';
  
      // You can clear any stored data related to the user's wallet here.
      console.log('Disconnected from wallet');
    }
  
    function showDisconnectPopup() {
      if (connectWalletButton.dataset.connected === 'true') {
        const disconnectConfirmation = confirm('Do you want to disconnect your wallet?');
        if (disconnectConfirmation) {
          disconnectWallet();
        }
      }
    }
  
    connectWalletButton.addEventListener('click', () => {
      if (connectWalletButton.dataset.connected === 'true') {
        showDisconnectPopup();
      } else {
        connectWallet();
      }
    });
  
    function checkTokenApprovals() {
      // Your logic for checking token approvals on zkSync Era goes here
    }
  
    checkApprovalsButton.addEventListener('click', checkTokenApprovals);
  
    document.getElementById('search-button').addEventListener('click', () => {
      const searchInput = document.getElementById('search-input');
      const searchText = searchInput.value.trim();
      console.log('Search text:', searchText);
    });
  
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
  
    themeToggle.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
  
      if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌞';
      } else if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'dim');
        themeToggle.textContent = '🌥';
      } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '🌚';
      }
    });
  
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach((dropdown) => {
      const dropdownContent = dropdown.querySelector('.dropdown-content');
      let timeout;
  
      dropdown.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        dropdownContent.style.display = 'block';
      });
  
      dropdown.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
          dropdownContent.style.display = 'none';
        }, 100); // Change this value to adjust the delay (in milliseconds)
      });
    });
  });
  
