import { Component, h } from 'preact';
import style from './style.css';

class HomeRoute extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <main class={style.HomeRoute}>
          This is the home page.
        </main>
      </div>
    );
  }
}

export default HomeRoute;
