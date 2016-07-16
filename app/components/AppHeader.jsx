import React from 'react';
import styles from '../stylus/app_header.styl'

export default class AppHeader extends React.Component {
  render() {
    return (
      <header className={ styles.header }>
        <h1 className={ styles.title }>CSS Animathon</h1>
        <p className={ styles.description }>hack-a-thon for learning css animations powered by #kosen10s</p>
      </header>
    );
  }
}
