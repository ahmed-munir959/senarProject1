import "./components/GlobalCSS.css";
import "./App.css";
import SignIn from "./pages/signIn/components/SignIn";
import ChooseAccount from "./pages/signUp/components/ChooseAccount";
import EmailForm from "./pages/signUp/components/EmailForm";
import OnBoarding1 from "./pages/studioOnboarding/components/OnBoarding1";
import OnBoarding2 from "./pages/studioOnboarding/components/OnBoarding2";

function App() {
  return (
    <>
      <OnBoarding2 />
    </>
  );
}

export default App;
