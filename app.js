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
        connectWalletButton.innerText = accounts[0].slice(0, 5) + '...' + accounts[0].slice(-5);
        connectWalletButton.dataset.connected = 'true';
      } else {
        connectWalletButton.innerText = 'Connect Wallet';
        connectWalletButton.dataset.connected = 'false';
      }
    }
  
    function disconnectWallet() {
      connectWalletButton.innerText = 'Connect Wallet';
      connectWalletButton.dataset.connected = 'false';
  
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
  
    document.getElementById('search-button').addEventListener('click', async () => {
      const searchInput = document.getElementById('search-input');
      const userAddress = searchInput.value.trim();
      const allowances = await getAllowances(userAddress);
      console.log('Allowances:', allowances.toString());
      updateAllowancesTable(allowances);
      import { getUserApprovalHistory } from './zksyncEraApprovals';
      updateAllowancesTable(allowances);

    document.getElementById('search-button').addEventListener('click', async () => {
      const searchInput = document.getElementById('search-input');
      const walletAddress = searchInput.value.trim();
      if (walletAddress) {
      try {
      const approvalHistory = await getUserApprovalHistory(walletAddress);
      console.log('Approval history:', approvalHistory);
    } catch (error) {
      console.error('Error fetching approval history:', error);
    }
  }
});

    });
    
    });
  
    function checkTokenApprovals() {
    }

    checkApprovalsButton.addEventListener('click', checkTokenApprovals);
  
    document.getElementById('search-button').addEventListener('click', () => 
      const searchInput = document.getElementById('search-input');
      const searchText = searchInput.value.trim();
      console.log('Search text:', searchText);
      async function connectWallet() 
        if (accounts.length > 0) {
          try {
            const approvalHistory = await getUserApprovalHistory(accounts[0]);
            console.log('Approval history:', approvalHistory);
          } catch (error)

  connectWalletButton.addEventListener('click', async () => {
            if (connectWalletButton.dataset.connected === 'true') {
              showDisconnectPopup();
            } else {
              await connectWallet();
              const userAddress = connectWalletButton.innerText;
              const allowances = await getAllowances(userAddress);
              console.log('Allowances:', allowances.toString());
              updateAllowancesTable(allowances);
            }
          });
      
    };
  
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
        }, 100); 
      });
    });
    const { getAllowances } = require('./zkSyncHelper');
    function updateAllowancesTable(allowances) {
      const tableBody = document.querySelector('#allowances-table tbody');
      tableBody.innerHTML = '';
    
      for (const allowance of allowances) {
        const row = document.createElement('tr');
    
        const tokenCell = document.createElement('td');
        tokenCell.textContent = allowance.token;
        row.appendChild(tokenCell);
    
        const amountCell = document.createElement('td');
        amountCell.textContent = allowance.amount;
        row.appendChild(amountCell);
    
        tableBody.appendChild(row);
      }
    }
    
    
 
