import { Snackbar } from '@mui/material';
import React from 'react';

const AlertCustome = ({ title, status, state, setState }) => {
  const close = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setState({});
    setState(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        message={title}
        open={state}
        onClose={close}
        autoHideDuration={6000}
        sx={{
          '.MuiPaper-root': {
            backgroundColor:
              status?.toLowerCase() === 'error' ? '#FFA4A4' : `#E0BEA2`,
            width: `400px`,
            height: `60px`,
          },

          '.MuiSnackbarContent-message': {
            fontSize: '20px',
            fontWeight: '700',
            color: status?.toLowerCase() === 'error' ? '#000' : `#fff`,
          },
        }}
      />
    </>
  );
};

export default AlertCustome;
