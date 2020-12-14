import React from 'react';

import ShoppData from './shopdata.js';

import CollectionPreview from '../Preview/preview';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: ShoppData
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;