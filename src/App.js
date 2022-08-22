import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

/* Главная страница */
import Header from './components/header/Header';
import Title from "./components/title/Title";
import Ratings from './components/ratings/Ratings';
import Reviews from './components/reviews/Reviews';
import Footer from './components/footer/Footer';

/* О системе */
import AboutSystem from "./components/aboutSystem/AboutSystem";
import Activity from "./components/aboutSystem/activity/Activity";
import Rules from "./components/aboutSystem/rules/Rules";
import Management from "./components/aboutSystem/management/Management";
import Team from "./components/aboutSystem/team/Team";

/* Регистрация / Вход */
import Register from './components/register/Register';
import Login from "./components/login/Login";

/* Кнонка - LogIn*/
import RegModal from './components/Modals/RegModal/RegModal';
import RegMail from './components/Modals/RegMail/RegMail';
import LogModal from './components/Modals/LogModal/LogModal';
import LogMail from './components/Modals/LogMail/LogMail';
import ForgerPas from './components/Modals/ForgetPas/ForgetPas';

/* Городские и Областные рейтинги */
import RegionalRatings from './components/ratings/regionalRatings/regionalRatings';
import CityRatings from "./components/ratings/cityRatings/cityRatings";

/* Подразделения областных рейтингов */
import Vuzy from "./components/ratings/regionalRatings/vuzy/Vuzy";
import Suzy from "./components/ratings/regionalRatings/suzy/Suzy";

/* Подразделения городских рейтингов */
import CityVuzy from "./components/ratings/cityRatings/cityVuzy/CityVuzy"
import Kolledzh from "./components/ratings/cityRatings/kolledzh/Kolledzh";

function App() {
  return (
  <Router >
    <Header/>

      <Routes>
        <Route exact path="/" element={<><Title/><Ratings/><Reviews/></>} />
        
        {/* О системе */}
        <Route exact path="/about" element={<AboutSystem/>} />
        <Route exact path="/activity" element={<Activity/>} />
        <Route exact path="/rules" element={<Rules/>} />
        <Route exact path="/managment" element={<Management/>} />
        <Route exact path="/team" element={<Team/>} />

        {/* Регистрация */}
        <Route exact path="/reg" element={<Register/>} />
        <Route exact path="/log" element={<Login/>} />

        {/* Кнопка - LogIn */}
        <Route exact path="/regModal" element={<RegModal/>} />
        <Route exact path="/regMail" element={<RegMail/>} />
        <Route exact path="/logModal" element={<LogModal/>} />
        <Route exact path="/logMail" element={<LogMail/>} />
        <Route exact path="/forgerPas" element={<ForgerPas/>} />

        {/* Областные рейтинги */}
        <Route exact path="/regional-ratings" element={<RegionalRatings/>} />
            {/* Вузы */}
            <Route exact path="/region-vuzy" element={<Vuzy/>} />
            {/* Ссузы */}
            <Route exact path="/region-suzy" element={<Suzy/>} />

        {/* Городские рейтинги */}
        <Route exact path="/city-ratings" element={<CityRatings/>} />
            {/* Вузы */}
            <Route exact path="/city-vuzy" element={<CityVuzy/>} />
            {/* Колледжи Техникумы */}
            <Route exact path="/city-kolledzh" element={<Kolledzh/>} />
      </Routes>
            
    <Footer/>
  </Router>
  );
}

export default App;
