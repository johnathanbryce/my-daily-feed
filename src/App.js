import APIsMain from "./components/APIs/APIsMain";
import Header from "./components/Layout/Header";
import ContentDivider from "./components/Layout/ContentDivider";
import Footer from "./components/Layout/Footer";

import "./App.css";

// TODO -- consider adding button to change theme thanks to pickle daddy

function App() {
  return (
    <div>
      <Header />

      <APIsMain />

      <Footer />
    </div>
  );
}

export default App;
