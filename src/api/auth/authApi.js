import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const loginRequest = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password);
};

// 7f2c20ffcad781a900fdd0d21d3c902d05b86ba0f107c40d8a04021545953f3ce32e07d002403d8dd2cd249dbc0c2cc480c28290bf2770e556c8ac403772e7743fa677fc6c8a25a579d4d0db0f2f1ff086fd76f365ecbd1c5e70a4f5611a9e2eb28f29ef46ed443fe127028a9b01203a746f17475ade52a77cbc8b4fa8b2a96d
