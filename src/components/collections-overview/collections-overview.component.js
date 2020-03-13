import React from 'react';
import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/selectors/shop.selectors';
import CollectionPreview from '../../components/Preview-collection/collection-preview.component';
import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = state => ({
  collections: selectCollectionsForPreview(state)
});

export default connect(mapStateToProps)(CollectionsOverview);
