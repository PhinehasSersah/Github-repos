import "./App.css";
import Wrapper from "./components/wrapper/wrapper";
import Navbar from "./components/navbar/navbar";
import SearchComponent from "./components/search/search";

function App() {
  return (
    <main>
      {/* <Navbar /> */}
      <Wrapper>
        <SearchComponent />
      </Wrapper>
    </main>
  );
}

export default App;
