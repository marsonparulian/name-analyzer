import { Provider } from "react-redux";
import store from "./components/store";
import NameAnalyzerPage from "./components/pages/NameAnalyzerPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <NameAnalyzerPage />
      </Provider>
    </div>
  );
}

export default App;
