import '../styles/scss/app.style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from "../components/navigations/Navigation.component";
import LoginRegisterPage from "./login/LoginSignupPage.view";
import Home from "./home/Home.view";
import Footer from '../components/footers/Footer.component';
function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <LoginRegisterPage />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>

  );
}

export default App;
