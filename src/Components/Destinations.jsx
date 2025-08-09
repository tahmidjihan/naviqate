import React, { useRef } from 'react';
import { Link } from 'react-router';

function Destinations() {
  const modalRef = useRef(null);
  const playerRef = useRef(null);
  const ytPlayer = useRef(null);
  const src =
    'https://www.youtube.com/embed/dQw4w9WgXcQ?si=ghqlbh1cTxH8eNMV&amp;controls=0';
  const showModal = () => {
    document.getElementById('rickroll_modal').showModal();
    loadYTScript();
  };

  const loadYTScript = () => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    } else {
      window.onYouTubeIframeAPIReady();
    }

    window.onYouTubeIframeAPIReady = () => {
      ytPlayer.current = new window.YT.Player(playerRef.current, {
        videoId: 'dQw4w9WgXcQ',
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
        },
        events: {
          onReady: (e) => {
            setTimeout(() => {
              // Try to unmute after slight delay
              ytPlayer.current.unMute();
              ytPlayer.current.setVolume(100);
            }, 0);
          },
        },
      });
    };
  };
  const closeModal = () => {
    if (ytPlayer.current) {
      ytPlayer.current.stopVideo();
    }
    document.getElementById('rickroll_modal').close();
  };
  return (
    <div className='hero py-32'>
      <div className='hero-content flex-col lg:flex-row container px-10'>
        <div>
          <h3 className='text-3xl text-cyan font-bold mb-7 w-full border-b-black border-b-2'>
            Destinations.
          </h3>
          <img src='./Assets/Destinations.png' className='rounded-lg ' />
        </div>

        <div>
          <h1 className='text-5xl font-bold'>
            We will not bother You Go wherever you want.
          </h1>
          <div className='py-6 min-w-[30vw]'>
            <h3
              href='#'
              className='text-xl text-cyan font-bold mb-7 w-full border-b-black border-b-2'
            >
              <Link to='/'>Home {'>'}</Link>
            </h3>
            <h3
              href='#'
              className='text-xl text-cyan font-bold mb-7 w-full border-b-black border-b-2'
            >
              <Link to='/login'>Sign In {'>'}</Link>
            </h3>
            <h3
              href='#'
              className='text-xl text-cyan font-bold mb-7 w-full border-b-black border-b-2'
            >
              <a href='#'>Dashboard {'>'}</a>
            </h3>

            <h3 className='text-xl text-cyan cursor-pointer font-bold mb-7 w-full border-b-black border-b-2'>
              <span onClick={showModal}>Special! {'>'}</span>
            </h3>
            <span href='#' className='text-xs text-cyan font-bold mb-7 w-full'>
              <Link to='/logout'>Logout {'>'}</Link>{' '}
              <Link href='#'>Emergency Logout {'>'}</Link>
            </span>
          </div>
          <button className='btn primary-btn'>Get started</button>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id='rickroll_modal' ref={modalRef} className='modal w-full'>
        <div className='modal-box px-4 py-8 text-center '>
          <h3 className='font-bold text-lg'>YOU’VE BEEN RICKED 🤡</h3>
          <div className='py-4'>
            <div className='max-w-md mx-auto'>
              <div id='yt-container'>
                <div ref={playerRef} className='max-w-md' />
              </div>
            </div>
          </div>
          <form method='dialog' onSubmit={closeModal}>
            <button className='btn'>Close</button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Destinations;
