import { CircularProgress } from '@mui/material';
import React from 'react';

const SpinerCustome = () => {
  return (
    <div className="spiner">
      <CircularProgress
        size={`80px`}
        color={'primary'}
      />
    </div>
  );
};

export default SpinerCustome;
