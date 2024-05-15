import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import PerformanceTest from "./components/performance/PerformanceTest";
import SocketURL from "./components/websocketurl/SocketURL";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<PerformanceTest />} />
          <Route path="/get-websocket-url" element={<SocketURL />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
