import React from 'react';
import { Box, Modal } from '@mui/material';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

import video from '../../assets/video/niftyVideo.mov';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '1200px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '6px',
  boxShadow: 24,
  p: 4,
};

function ModalVideoPlay({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <ReactPlayer
          loop={true}
          url={video}
          width='1100'
          height='540'
          playing={true}
        />
      </Box>
    </Modal>
  );
}

ModalVideoPlay.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ModalVideoPlay;
