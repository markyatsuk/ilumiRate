import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Transparency } from "./components/Transparency/Transparency";
import { Community } from "./components/Community/Community";
import { WhoIs } from "./components/WhoIS/WhoIs";
import { FutureVersion } from "./components/FutureVersion/FutureVersion";
import { Summary } from "./components/Summary/Summary";
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Transparency />
      <Community />
      <WhoIs />
      <FutureVersion />
      <Summary />
      <Footer />
    </div>
  );
}

export default App;
