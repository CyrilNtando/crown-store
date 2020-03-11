import React from 'react';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/selectors/directory.selectors';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = state => ({
  sections: selectDirectorySections(state)
});

export default connect(mapStateToProps)(Directory);
