import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Web3 from 'web3';
import HomePage from './HomePage';
import CreateEWastePassport from './CreateEWastePassport';
import PerformTransactions from './PerformTransactions';

let web3;

function App() {
  
  useEffect(() => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        window.ethereum.enable();
    } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
    } else {
        window.alert('Ethereum browser not detected. You should consider trying MetaMask!');
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-passport" element={<CreateEWastePassport />} />
          <Route path="/perform-transactions" element={<PerformTransactions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
