import React from "react";
import CatchyHeader from "./components/catchy-header/catchy-header";
import Footer from "./components/footer/footer";
import HowItWorks from "./components/how-it-works/how-it-works";

const App: React.FC = () => {
  return (
    <div className="App">
      <CatchyHeader />
      <div>
        <HowItWorks />
      </div>
      <Footer />
    </div>
  );
};

export default App;
