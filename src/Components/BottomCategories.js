import React, { Fragment } from 'react';
import { BottomCategoriesCard } from './BottomCategoriesCard';

export const BottomCategories = () => {
  return (
    <Fragment>
      <div className='m-product'>
        <div className='row no-gutters'>
          <BottomCategoriesCard></BottomCategoriesCard>
          <BottomCategoriesCard></BottomCategoriesCard>
          <BottomCategoriesCard></BottomCategoriesCard>
          <BottomCategoriesCard></BottomCategoriesCard>
          <BottomCategoriesCard></BottomCategoriesCard>
          <BottomCategoriesCard></BottomCategoriesCard>
          <BottomCategoriesCard></BottomCategoriesCard>
          <BottomCategoriesCard></BottomCategoriesCard>
        </div>
      </div>
    </Fragment>
  );
};
