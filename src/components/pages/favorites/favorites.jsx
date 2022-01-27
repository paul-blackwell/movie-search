import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ButtonBack from '../../atoms/button-back/button-back';
import SecondaryHeading from '../../atoms/typography/secondary-heading/secondary-heading';

const Favorites = () => {
  // Get Favorites from store
  const favorites = useSelector((state) => state.favorites.value);

  // If no favorites show error toast
  const dispatch = useDispatch();
  if (favorites.length < 1) {
    console.log('fired');
    dispatch({
      type: 'SHOW_TOAST',
      payload: {
        display: true,
        message: 'You currently have to favorites saved',
        type: 'error',
      },
    });
  }

  if (favorites.length < 1) {
    return (
      <>
        <ButtonBack to="/">
          Back
        </ButtonBack>
        <SecondaryHeading>You currently have no favorites saved</SecondaryHeading>
      </>
    );
  }

  // If Favorites
  return (
    <div>
      Test
    </div>
  );
};

export default Favorites;
