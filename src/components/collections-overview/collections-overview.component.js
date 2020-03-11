import React from 'react';
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/selectors/shop.selectors';
import CollectionPreview from '../../components/Preview-collection/collection-preview.component';
import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);
const mapStateToProps = state => ({
  collections: selectCollections(state)
});

export default connect(mapStateToProps)(CollectionsOverview);
