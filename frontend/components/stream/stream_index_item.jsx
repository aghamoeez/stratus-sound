import React from 'react';
import { Link } from 'react-router';

const StreamIndexItem = ({ track, fetchCurrentTrack }) => {
  return (
    <ul className="stream-tracks">
      <li>
        <Link to={`tracks/${track.id}`}>
          <img src={track.photo_url}/>
        </Link>
      </li>

      <li className="small-play" onClick={ () => fetchCurrentTrack(track.id) }>
        Play
      </li>

      <ul>

        <li>
           <h4>{track.user.username}</h4>
        </li>
        <li>
          {track.name}
        </li>
      </ul>

    </ul>
  );
};

export default StreamIndexItem;
