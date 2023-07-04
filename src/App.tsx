import "./App.css";
import Wrapper from "./components/wrapper/wrapper";
import Navbar from "./components/navbar/navbar";
import SearchComponent from "./components/search/search";
import { useState } from "react";

export type ShowSearchProps = {
  showSearch?: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
};

function App() {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  return (
    <main>
      <Navbar showSearch={showSearch} setShowSearch={setShowSearch}/>
      <Wrapper>
        <SearchComponent showSearch={showSearch} setShowSearch={setShowSearch}/>
      </Wrapper>
    </main>
  );
}

export default App;
