import { Contract, ethers } from "ethers";
import { useState } from "react";
import FunctionsAndErrors from "../artifacts/contracts/FunctionsAndErrors.sol/FunctionsAndErrors.json"
import './App.css'

import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Button,
  TextField,
} from "@mui/material";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    }
  });

  const FAndEAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3" ;

  const [contract, setContract] = useState(undefined);

  const [num, setNum] = useState(0);
  const [count, setCount] = useState("Not AVAILABLE");

  const connectWallet = () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      provider.send("eth_requestAccounts", []).then(() => {
        provider.getSigner().then((signer) => {
          setContract(new Contract(FAndEAddress, FunctionsAndErrors.abi, signer));
        });
      });
    } else {
      alert("Metamask not Installed!");
    }
  };

  const requireOdd = async (num) => {
    if (!contract) return;
    let tx = await contract.requireOdd(num);
    await tx.wait();
    updateCount();
  };

  const assertOdd = async (num) => {
    if (!contract) return;
    let tx = await contract.assertOdd(num);
    await tx.wait();
    updateCount();
  };

  const revertOdd = async (num) => {
    if (!contract) return;
    let tx = await contract.revertOdd(num);
    await tx.wait();
    updateCount();
  };

  const updateCount = async () => {
    if (!contract) return;
    const newCount = (await contract.Odd()).toString();
    setCount(Number(newCount));
  };



  return (
   
<ThemeProvider theme={darkTheme}>
<CssBaseline /> 

<div className="Outer">

  <h2>{count}</h2>

    <TextField
    variant="outlined"
    type="number"
    value={num}
    onChange={(event) => setNum(Number(event.target.value))}
    />



    <Button  
    variant="contained"
    onClick={() => requireOdd(num)}
    >
      Require
    </Button>

    <Button  
    variant="contained"
    onClick={() => assertOdd(num)}
    >
      Assert
    </Button>

    <Button  
    variant="contained"
    onClick={() => revertOdd(num)}
    >
      Revert
    </Button>

    <Button  
    variant="contained"
    onClick={() => updateCount()}
    >
      Update
    </Button>

    <Button  
    variant="contained"
    onClick={() => connectWallet()}
    >
      Connect
    </Button>

    </div>

</ThemeProvider>
  )
}

export default App;
