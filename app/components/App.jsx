import React from 'react';
import styles from '../stylus/app.styl';
import AppHeader from './AppHeader';
import Entry01 from './Entry01';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <AppHeader />
        <section>
          <Entry01 />
        </section>
      </div>
    );
  }
}
