import React from "react";
import Header from "./Header";
import Presentation from "./Presentation";
import Voiture from "./voiture"; // ← même dossier

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <Presentation />
        <br />
        <Voiture />
      </div>
    );
  }
}

export default App;
