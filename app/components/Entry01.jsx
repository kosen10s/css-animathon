import React from 'react';
import styles from '../stylus/entry.styl'

export default class Entry01 extends React.Component {
  render() {
    return (
      <article>
        <h1 className={ styles.title }>CSS Animathon #1 (2016.07.16)</h1>
        <p className={ styles.description }>
          参加者は<a href="https://twitter.com/denari01"
          >でなり</a>と<a href="https://twitter.com/c_bata_"
          >カレーメシ先輩</a>のみになった。
        </p>
        <p className={ styles.description }>
          でなりはPyCon JPのチケットを少し消化した後、
          webpack / React の事始めを行った。
          成果物はこのWebサイトである。
          (ソース : <a href='https://github.com/kosen10s/css-animathon/tree/gh-pages'>GitHub</a>)
        </p>
        <p className={ styles.description }>
          カレーメシ先輩はPyCon JPのチケットを少し消化した後、
          Web関連の技術をでなりに教えたり、
          自分でもある程度 React Animation Component についてしらべつつ、
          大半を、副収入(NOT プログラミング)に関する調査に費やしていた。
        </p>
        <p className={ styles.description }>
          全体的にAnimathonじゃなかった。ただ勉強にはなった。
          せっかくこのWebサイトという遊び場ができたので、次回こそAnimathonをしたい。
        </p>
      </article>
    );
  }
}
