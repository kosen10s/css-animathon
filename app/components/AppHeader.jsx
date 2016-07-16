import React from 'react';
import styles from '../stylus/app_header.styl'

class TwitterShareButton extends React.Component {
  render() {
    return (
      <a href="https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fkosen10s.net%2Fcss-animathon&ref_src=twsrc%5Etfw&text=CSS%20animathon%20-%20hack-a-thon%20for%20learning%20css%20animathons%20powered%20by%20kosen10s&tw_p=tweetbutton&url=http%3A%2F%2Fkosen10s.net%2Fcss-animathon&via=kosen10s" className={ styles.tweet }>Twitterでシェア</a>
    )
  }
}

export default class AppHeader extends React.Component {
  render() {
    return (
      <header className={ styles.header }>
        <h1 className={ styles.title }>CSS Animathon</h1>
        <p className={ styles.description }>hack-a-thon for learning css animations powered by #kosen10s</p>
        <TwitterShareButton />
      </header>
    );
  }
}
