import React, { PureComponent } from 'react';
import { string, func, node } from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

class Button extends PureComponent {
  static propTypes = {
    label: string,
    className: string,
    variation: string,
    onClick: func,
    children: node
  };

  render() {
    const { className, label, variation, children, ...others } = this.props;
    const buttonClass = classNames(styles.common, className, { [styles.orangeGrad]: variation === "orangeGrad", [styles.greenGrad]: variation === "greenGrad" });

    return <button className={buttonClass} {...others} >{label || children}</button>;
  }
}

export default Button;

