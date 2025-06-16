import React, { useState, useEffect } from "react";
import { dbank } from "../../declarations/dbank";

const App = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    update();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const button = event.target.querySelector("#submit-btn");

    const inputAmount = parseFloat(document.getElementById("input-amount").value);
    const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

    button.setAttribute("disabled", true);

    if (document.getElementById("input-amount").value.length !== 0) {
      await dbank.topUp(inputAmount);
    }

    if (document.getElementById("withdrawal-amount").value.length !== 0) {
      await dbank.withdraw(outputAmount);
    }

    await dbank.compound();

    update();

    document.getElementById("input-amount").value = "";
    document.getElementById("withdrawal-amount").value = "";

    button.removeAttribute("disabled");
  };

  const update = async () => {
    const currentAmount = await dbank.checkBalance();
    setBalance(Math.round(currentAmount * 100) / 100);
  };

  return (
    <div>
      <h1>DBank</h1>
      <p>Current Balance: ${balance}</p>
      <form onSubmit={handleSubmit}>
        <input type="number" id="input-amount" placeholder="Deposit Amount" />
        <input type="number" id="withdrawal-amount" placeholder="Withdrawal Amount" />
        <button id="submit-btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
