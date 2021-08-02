import { Provider } from "react-redux";
import store from "./components/store";
import NameAnalyzerPage from "./components/pages/NameAnalyzerPage";
import Footer from "./components/organisms/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <NameAnalyzerPage />
      </Provider>
      <Footer />
    </div >
  );
}

export default App;
