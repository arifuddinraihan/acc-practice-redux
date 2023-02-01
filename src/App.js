import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { Provider } from "react-redux";
import newStore from "./redux/store";


function App() {
  return (
    <div>
      <Provider store={newStore}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;
