import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./components/Layout";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  const initialOptions = {
    "client-id":
      "AczmPF7dh3g9bvvu6W-YG5rf6ZivHGUKiDwzfJ4tl9bT_U7W9Lb9w1SyF8ExN5-h_-kYuBp7DR1mCA19",
    currency: "AUD",
    intent: "capture",
    // "data-client-token": "abc123xyz==",
  };

  return (
    <div className="App">
      <PayPalScriptProvider options={initialOptions}>
        <Layout />
      </PayPalScriptProvider>
    </div>
  );
}

export default App;
