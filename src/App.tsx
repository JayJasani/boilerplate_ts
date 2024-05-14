import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Routes = () => {
  return useRoutes(routes);
};

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate="%s | " defaultTitle="EC"></Helmet>
      </HelmetProvider>
      <Routes />
    </>
  );
}

export default App;
