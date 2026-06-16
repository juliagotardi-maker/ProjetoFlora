import Header from "./Components/Header/Header.jsx";
import Main from "./Components/Main/Main.jsx";
import Footer from "./Components/Footer/Footer.jsx";

<<<<<<< Updated upstream
function App() {
=======
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Buques from "./Pages/Buques/Buques";

function Home() {
>>>>>>> Stashed changes
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

<<<<<<< Updated upstream
export default App;
=======
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buques" element={<Buques />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
>>>>>>> Stashed changes
