import React, { PureComponent } from 'react';
import styles from './styles.scss';
import Card from './Card';

class Pack extends PureComponent {
    render() {
        const { data, title } = this.props;

        return (
            <div className={styles.pack} >
                <div className={styles.packHead} >
                    {title || "Title Needed"}
                </div>
                <div className={styles.packList} >
                    {
                        data && data.length
                        ? data.map((cardData, index) => {
                            return <Card key={index} data={cardData} />;
                        })
                        : null
                    }
                </div>
            </div>
        );
    }
}

export default Pack;
