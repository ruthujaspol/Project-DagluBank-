#  DagluBank (DBank)

A decentralized banking dApp built on the Internet Computer using Motoko and React.

Welcome to your new DBank project and to the Internet Computer development community. This project enables you to interact with a decentralized bank via a simple frontend and a powerful backend written in Motoko.

---

## 🚀 Features

- 🔐 Secure authentication using Internet Identity  
- 🧠 Backend canister logic written in Motoko  
- 🖥️ Frontend UI with live interaction via agents  
- 💸 Redeem faucet coupon for cycle allocation  
- 🌐 Fully deployed to the Internet Computer mainnet  

---

## 🧰 Tech Stack

- **Motoko** (for backend canisters)  
- **DFINITY SDK (`dfx`)**  
- **Internet Identity**  
- **Cycles Ledger**  
- **GitHub Actions / Deployment Scripts**

---

## 🛠️ Local Development Setup

⚠️ Make sure you have Rust, Node.js, and DFX installed.

```bash
git clone https://github.com/ruthujaspol/Project-DagluBank-.git
cd Project-DagluBank-
dfx start --background
dfx deploy
npm run start  # Or use another command if `start` is unavailable
```

---

## 🌐 Mainnet Deployment

✅ Step 1: Create and Use a DFX Identity
```bash
dfx identity new ruthuja02
dfx identity use ruthuja02
```

✅ Step 2: Redeem Faucet Coupon
```bash
dfx cycles redeem-faucet-coupon F943F-FD9EA-7E46D --ic
```
 Redeemed 10 Trillion Cycles

✅ Step 3: Deploy to IC Mainnet
```bash
dfx deploy --ic
```
 Project deployed to the Internet Computer

---

## 🔗 Live URLs

- 🌐 [Frontend Canister](https://k3hhc-kaaaa-aaaad-qhl6q-cai.icp0.io/)
- 🧠 [Backend Canister (Candid Interface)](https://a4qg6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=k4gbw-hyaaa-aaaad-qhl6a-cai)

## 📁 Project Structure

- `src/DBank_backend/`: Motoko backend canister (handles logic)
- `src/DBank_frontend/`: React-based frontend
- `dfx.json`: Configuration file
- `package.json`: Project dependencies
- `README.md`: Project manual and instructions.

## 🙌 Credits & Community

Special thanks to:
- [BlockseBlock (LinkedIn)](https://www.linkedin.com/company/blockseblock/)

- [ICP India / Crewsphere (LinkedIn)](https://www.linkedin.com/company/crewsphere/)

- [DFINITY Foundation](https://dfinity.org/)

