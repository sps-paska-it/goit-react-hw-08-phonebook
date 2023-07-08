import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { DivOverlayStyled } from './Snipper.styled';

export const Loader = ({ loading }) => {
  return (
    <>
      {loading && (
        <DivOverlayStyled>
          <ClipLoader
            color="#fe6b8b"
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </DivOverlayStyled>
      )}
    </>
  );
};
