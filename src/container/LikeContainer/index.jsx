import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import LikePage from '../../page/LikePage';
import { requestData } from '../../server/function/request';

const LikeContainer = () => {
  const [data, setData] = useState([]);
  const [spiner, setSpiner] = useState(false);

  useEffect(() => {
    requestData('http://localhost:3001/like', setSpiner, setData);
  }, []);

  return (
    <>
      <LikePage
        spiner={spiner}
        data={data}
      />
    </>
  );
};

export default LikeContainer;
