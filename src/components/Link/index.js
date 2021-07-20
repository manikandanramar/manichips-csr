import React, { PureComponent } from 'react';
import { string, node, oneOfType, bool } from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import styles from './styles.scss';
import classnames from 'classnames';

class Link extends PureComponent {
  static propTypes = {
    to: string,
    className: string,
    children: oneOfType([string, node]),
    block: bool
  };

  render() {
    const { className, block, ...rest } = this.props;
    const styleClass = classnames(className, styles.link, { [styles.block]: block });

    return <RouterLink className={styleClass}  {...rest} >{this.props.children}</RouterLink>;
  }
}

export default Link;
