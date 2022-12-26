import { Snackbar } from '@mui/material';
import React from 'react';

const AlertCustome = ({ alert }) => {
  const close = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    alert.setAlert(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        message={alert?.result?.messange}
        open={alert.alert}
        onClose={close}
        autoHideDuration={6000}
        sx={{
          '.MuiPaper-root': {
            backgroundColor:
              alert?.result?.status?.toLowerCase() === 'error'
                ? '#FFA4A4'
                : `#E0BEA2`,
            width: `400px`,
            height: `60px`,
          },

          '.MuiSnackbarContent-message': {
            fontSize: '20px',
            fontWeight: '700',
            color:
              alert?.result?.status?.toLowerCase() === 'error'
                ? '#000'
                : `#fff`,
          },
        }}
      />
    </>
  );
};

export default AlertCustome;
