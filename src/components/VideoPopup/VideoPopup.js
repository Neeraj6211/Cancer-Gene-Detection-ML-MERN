import React from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import useGlobalContext from '../../hooks/useGlobalContext';

const VideoPopup = ({videoId}) => {
    const popupValue = useGlobalContext();
    const { isOpen, setIsOpen } = popupValue
    return (
        <>
            <ModalVideo channel='https://www.youtube.com/watch?v=KMkmkpitAH0' autoplay isOpen={isOpen}
                videoId={videoId} onClose={() => setIsOpen(false)} />
        </>
    );
};

export default VideoPopup;