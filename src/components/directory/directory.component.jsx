import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectSections } from '../../redux/directory/directory.selectors';


const Directory = ({sections}) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});
export default connect(mapStateToProps)(Directory);