import { h } from 'preact';
import { Router } from 'preact-router';

// Code-splitting is automated for `routes` directory
import HomeRoute from '../routes/home-route';
// import SomeOtherRoute from '../routes/some-other-route';

const App = () => (
  <div id="app">
    <Router>
      <HomeRoute path="/" />
      {/* <SomeOtherRoute path="/some-other-path/:myVariable" /> */}
    </Router>
  </div>
)

export default App;
