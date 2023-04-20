document.addEventListener('DOMContentLoaded', async () => {
    const connectWalletButton = document.getElementById('connect-wallet');
    const checkApprovalsButton = document.getElementById('check-approvals');
    
    if (!connectWalletButton || !checkApprovalsButton) {
      console.error('Could not find the required elements on the page.');
      return;
    }
    
    async function connectWallet() {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          const account = accounts[0];
          console.log('Connected account:', account);
          connectWalletButton.innerText = `${account.slice(0, 6)}...${account.slice(-4)}`;
          connectWalletButton.dataset.connected = 'true';
        } catch (error) {
          console.error('Error connecting to MetaMask:', error);
        }
      } else {
        alert('MetaMask is not installed. Please install MetaMask and try again.');
      }
    }
  
    function disconnectWallet() {
      connectWalletButton.innerText = 'Connect Wallet';
      connectWalletButton.dataset.connected = 'false';
      // You can clear any stored data related to the user's wallet here.
      console.log('Disconnected from wallet');
    }
    
    function checkTokenApprovals() {
      // Your logic for checking token approvals on zkSync Era goes here
    }
    
    connectWalletButton.addEventListener('click', () => {
      if (connectWalletButton.dataset.connected === 'true') {
        disconnectWallet();
      } else {
        connectWallet();
      }
    });
  
    checkApprovalsButton.addEventListener('click', checkTokenApprovals);
  });
  