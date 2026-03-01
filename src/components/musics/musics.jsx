/** @format */

import './musics.scss'

const musicItems = [5570773, 5395643, 5330008, 5017016, 4900595]
const releasedTracks = [5570773, 5395643, 5330008, 5017016, 4900595]

const MusicItem = ({ trackId }) => (
  <div className='music_item'>
    <iframe
      src={`https://embed.beatport.com/?id=${trackId}&type=${releasedTracks.includes(trackId) ? 'release' : 'track'}`}
      width='400'
      title={trackId}
      height='162'
      frameBorder='0'
      scrolling='no'
      style={{ maxWidth: '600px' }}
    ></iframe>
  </div>
)

const Musics = () => {
  return (
    <section className='second_main_section'>
      <h1 id='landing_music'>Music</h1>
      <div className='main_wrapper'>
        {musicItems.map((trackId, index) => (
          <MusicItem key={index} trackId={trackId} />
        ))}
      </div>
    </section>
  )
}

export default Musics
