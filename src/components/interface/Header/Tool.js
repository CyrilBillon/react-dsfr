import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { deepFilter, deepForEach } from 'react-children-utilities';
import HeaderContext from './headerContext';

const Tool = ({
  children, className, buttonClose,
}) => {
  const searchBar = deepFilter(children, (child) => child.props && !!child.props.onSearch);
  let toolItemGroup = null;
  deepForEach(children, (child) => {
    if (child.type && child.type.name === 'ToolItemGroup') toolItemGroup = child;
  });
  const {
    isOpenSearch, onOpenSearch,
  } = useContext(HeaderContext);
  const _className = classNames('fr-header__tools', className);
  return (
    <div
      className={_className}
    >
      {!isOpenSearch && toolItemGroup}
      <div className={classNames('fr-header__search fr-modal', { 'fr-modal--opened': isOpenSearch })}>
        <div className="fr-container fr-container-lg--fluid">
          <button
            onClick={onOpenSearch}
            type="button"
            className="fr-link--close fr-link"
            title={buttonClose}
            aria-controls="header-tools-popin"
          >
            {buttonClose}
          </button>
          {searchBar}
        </div>
      </div>
    </div>
  );
};
Tool.defaultProps = {
  className: '',
  buttonClose: 'Fermer',
};

Tool.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  buttonClose: PropTypes.string,
};
export default Tool;
