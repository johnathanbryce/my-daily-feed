import APIsMain from "./components/APIs/APIsMain";
import Header from "./components/Layout/Header";
import ContentDivider from "./components/Layout/ContentDivider";
import Footer from "./components/Layout/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <ContentDivider />
      <APIsMain />
      <ContentDivider />
      <Footer />
    </div>
  );
}

export default App;
