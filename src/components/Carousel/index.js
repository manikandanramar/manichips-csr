import React, { PureComponent } from "react";
import styles from "./styles.scss";
import Tile from "./Tile";
import Link from "../Link";
import classnames from "classnames";

class Carousel extends PureComponent {
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
        this.container = React.createRef();
    }

    state = {
        scroll: 0,
    }

    onLeftClick = () => {
        const current = this.state.scroll;
        const containerWidth = this.container.current.clientWidth;
        if (current < 0) {
            if (current < -(containerWidth))
            this.setState({ scroll: (this.state.scroll + containerWidth) });
            else
            this.setState({ scroll: 0 })
        }
    }

    onRightClick = () => {
        const current = this.state.scroll;
        const containerWidth = this.container.current.clientWidth;
        const length = (this.wrapper.current.scrollWidth - containerWidth - Math.abs(current));

        if (length > 0) {
            if (length > containerWidth)
            this.setState({ scroll: (this.state.scroll - containerWidth) });
            else
            this.setState({ scroll: (this.state.scroll - length) });
        }
    }

    render() {
        const { data, title, full } = this.props;
        const transformStyle = { transform: `translateX(${this.state.scroll}px)` };

        return (
            <div className={styles.carousel} >
                <div className={classnames(styles.left, { [styles.minimal]: !full })} onClick={this.onLeftClick} ><span></span></div>
                <div className={classnames(styles.right, { [styles.minimal]: !full })} onClick={this.onRightClick} ><span></span></div>
                {
                    full
                    ? (
                        <div className={styles.carouselTitleWrapper} >
                            <span className={styles.carouselTitle} >{title || "Title Needed"}</span>
                            <Link className={styles.viewMoreLink} to="/" >view all</Link>
                        </div>
                    )
                    : <div className={styles.minimalTitle} >{title || "Title Needed"}</div>
                }
                <div className={styles.carouselContainer} ref={this.container} >
                    <div className={styles.carouselItems} style={transformStyle} ref={this.wrapper}  >
                        {
                            data && !!data.length &&
                            data.map((tD, n) => <Tile key={n} info={tD} full={full} />)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;