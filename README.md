# Matt's zkSync Era Approval Checker 

This practice project is a web3 dApp which allows users to connect their Ethereum wallets, such as MetaMask, and check token approvals on the zkSync Era.

## Features

- Connect to MetaMask or other Ethereum wallets
- Check token approvals on zkSync Era 
- Display connected wallet address
- Helpful links related to zkSync Era and token approvals

## General info

The app.js file contains the main JavaScript logic. It listens for the DOMContentLoaded event, which ensures that the DOM has been loaded before the script executes. 

It contains the following functions:

- connectWallet: Connects to the user's MetaMask wallet and updates the button text with the connected wallet address. If MetaMask is not installed, it alerts the user to install it.
- disconnectWallet: Disconnects the wallet and resets the button text to its original state.
- checkTokenApprovals: This is where the logic for checking token approvals on the zkSync Era should go. It's currently empty.

The index.html file includes the basic structure of the web page, with two main buttons for connecting the wallet and checking token approvals. Additionally, it contains a "Helpful Links" dropdown with links to related resources.

The package.json file lists the dependencies and development dependencies, such as zksync, zksync-crypto, ethers, and browserify. It also contains build and start scripts, which use browserify and live-server, respectively.


## Getting Started

1. Clone the repository:

```
git clone https://github.com/your-username/zksync-era-approval-checker.git
```

2. Install dependencies:

```
cd zksync-era-approval-checker
npm install
```

3. Start the local development server:

```
npm start
```

4. Open your browser and navigate to `http://127.0.0.1:8080` to view the application.
