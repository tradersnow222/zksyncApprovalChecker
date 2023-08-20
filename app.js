
import {
  useMetamask,
  useWalletConnect,
  useCoinbaseWallet,
  useNetwork,
  useAddress,
  useDisconnect,
} from '@thirdweb-dev/react';

export const ConnectWallet = () => {
  const connectWithCoinbaseWallet = useCoinbaseWallet();
  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const disconnectWallet = useDisconnect();
  const address = useAddress();
  const network = useNetwork();

  if (address) {
    return (
      <div>
        Address: {address}
        <br />
        Chain ID: {network[0].data.chain && network[0].data.chain.id}
        <br />
        <button onClick={disconnectWallet}>Disconnect</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => connectWithCoinbaseWallet()}>
        Connect Coinbase Wallet
      </button>
      <button onClick={() => connectWithMetamask()}>Connect MetaMask</button>
      <button onClick={() => connectWithWalletConnect()}>
        Connect WalletConnect
      </button>
    </div>
  );
};

document.getElementById('search-button').addEventListener('click', async () => {
  const searchInput = document.getElementById('search-input');
  const userAddress = searchInput.value.trim();
  const allowances = await getAllowances(userAddress);
  console.log('Allowances:', allowances.toString());
  updateAllowancesTable(allowances);
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