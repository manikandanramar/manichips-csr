import React, { PureComponent } from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

class Image extends PureComponent {
  static propTypes = {
    source: string,
    className: string,
    variation: string,
  };

  render() {
    const { className, source, variation,  ...others } = this.props;
    const imageClass = classNames(className, { [styles[variation]]: styles[variation] });

    return <img className={imageClass} src={source} alt="image error" {...others} />;
  }
}

export default Image;
