# Smart Contract Management Project

## Description
This project demonstrates Smart Contract Frontend Integration with Vite + React as frontend and Hardhat node running locally to deploy and access the contract.

## Getting Started

### Executing the program

1. Open https://gitpod.io and create a new Gitpod Workspace
2. enter `npm install` on the terminal to install the modules
3. create 2 terminal instances that will be used later on
4. on the 1st terminal enter `npx hardhat node` to start your Hardhat node.
5. then click ports on the lower right corner of the window
6. then use the address that is associated with port 8545 as the RPC URL to add a new network to the metamask wallet
7. to add the hardhat node click this link https://support.chainstack.com/hc/en-us/articles/4408642503449-Using-MetaMask-with-a-Hardhat-node)
8. then go back to the terminal and use atleast one of the generated account's private key to import the account to the metamask wallet
9. on the 2nd terminal that you created etner `npx hardhat run --network localhost scripts/deply.js` to deploy the smart contract
10. Enter `npm run dev` on the terminal to start the frontend server
11. connect the metamask wallet to interact with the app functions.

## Author 
Adam Ulric E. Garcia
auegarcia@mymail.mapua.edu.ph

## License

This project is licensed under the MIT License - see the LICENSE file for details

