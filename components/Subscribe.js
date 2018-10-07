const Subscribe = props => (
  <div className="subscribe">
    <ul className="subscribe__links">
      <li className="subscribe__link subscribe__link--itunes">
        <a
          target="_blank"
          href="https://itunes.apple.com/ca/podcast/mongodb-journal-podcast/id1253186678?mt=2"
        >
          iTunes
        </a>
      </li>
      <li className="subscribe__link subscribe__link--overcast">
        <a
          target="_blank"
          href="https://overcast.fm/itunes1253186678/mongodb-journal-podcast"
        >
          Overcast
        </a>
      </li>
      <li className="subscribe__link subscribe__link--google">
        <a
          target="_blank"
          href="https://www.google.com/podcasts?feed=???"
        >
          Google Podcast
        </a>
      </li>
      <li className="subscribe__link subscribe__link--stitcher">
        <a target="_blank" href="http://www.stitcher.com/s?fid=??&refid=stpr">
          Stitcher
        </a>
      </li>
      <li className="subscribe__link subscribe__link--pocketcasts">
        <a target="_blank" href="http://pca.st/??">
          PocketCasts
        </a>
      </li>
      <li className="subscribe__link subscribe__link--googleplay">
        <a
          target="_blank"
          href="https://playmusic.app.goo.gl/?ibi=com.google.PlayMusic&isi=??&ius=googleplaymusic&link=https://play.google.com/music/m/Ityd325x5s5ivr3fc74hvvgeztu?t%3DSyntax_-_Tasty_Web_Development_Treats%26pcampaignid%3DMKT-na-all-co-pr-mu-pod-16"
        >
          Google Play
        </a>
      </li>
      <li className="subscribe__link subscribe__link--spotify">
        <a
          target="_blank"
          href="https://open.spotify.com/show/???si=bOe7-??"
        >
          Spotify
        </a>
      </li>
      <li className="subscribe__link subscribe__link--rss">
        <a target="_blank" href="http://feed.journalpodcast.com/rss">
          RSS
        </a>
      </li>
    </ul>
  </div>
);

export default Subscribe;
