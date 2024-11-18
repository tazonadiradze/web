import Header from "./components/header/header";
import Home from "./components/home/home";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 overflow-y-auto ">
        <Home />
      </div>
    </div>
  );
};

export default App;
