import Body from "./components/Body";
import { Provider } from "react-redux";
import appstore from "./utils/store/appstore";
function App() {
  return (
    <Provider store={appstore}>
      <Body />
    </Provider>
  );
}

export default App;
