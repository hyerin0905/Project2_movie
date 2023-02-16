import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './js/Navigation';
import Footer from './js/Footer';
// import Ticketing from './js/Ticketing';
// import Ticketing3 from './js/Ticketing3';
import './css/reset.css'
import './css/style.css'
import TicketingCheck from './js/TicketingCheck';
// import Ticketing3 from './js/Ticketing3';

function App() {
  return (
    <>
      <Navigation />
      {/* <Route path="/ticketing" component={Ticketing} exact={true} /> */}
      {/* <Route path ="/ticketing3" component={Ticketing3} exact={true} /> */}
      <Route path="/ticketingcheck" component={TicketingCheck} exact={true} />
      <Footer />
    </>
  );
}

export default App;
