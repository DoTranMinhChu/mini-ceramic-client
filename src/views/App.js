import '../styles/scss/app.style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from "../components/navigations/Navigation.component";
import LoginRegisterPage from "./login/LoginSignupPage.view";
import Home from "./home/Home.view";
function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <LoginRegisterPage />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
