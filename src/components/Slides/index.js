import React, { PureComponent } from "react";
import styles from "./styles.scss";
import Image from "../Image";

const transformProperty = () => {
    const transform = typeof window !== 'undefined' && window.document.documentElement.style.transform;
    if (typeof transform === 'string') {
        return 'transform';
    }
    return 'WebkitTransform';
};

class Slides extends PureComponent {
    constructor() {
        super();
        this.sliderFrame = React.createRef();
        this.container = React.createRef();
        this.drag = {
            startX: 0,
            endX: 0,
            startY: 0,
            letItGo: null
        };

        this.currentSlide = this.config.startIndex;
    }

    config = {
        resizeDebounce: 250,
        duration: 200,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: false,
        onInit: () => {},
        onChange: () => {}
    }

    componentDidMount() {
        this.selectorWidth = this.container.current.clientWidth;
        this.perPage = this.config.perPage;
        this.innerElementsLength = this.props.data && this.props.data.length || 0;
    }

    clearDrag = () => {
        this.drag = {
            startX: 0,
            endX: 0,
            startY: 0,
            letItGo: null
        };
    }

    slideToCurrent = () => {
        this.sliderFrame.current.style[transformProperty()] = `translate3d(-${Math.round(this.currentSlide * (this.selectorWidth / this.perPage))}px, 0, 0)`;
    }

    prev(n = 1, callback) {
        if (this.currentSlide === 0 && this.config.loop) {
            this.currentSlide = this.innerElementsLength - this.perPage;
        } else {
            this.currentSlide = Math.max(this.currentSlide - Number(n), 0);
        }
        this.slideToCurrent();
        this.config.onChange.call(this);
        
        if (typeof callback === 'function') {
            callback();
        }
    }

    next(n = 1, callback) {
        if (this.currentSlide === this.innerElementsLength - this.perPage && this.config.loop) {
            this.currentSlide = 0;
        } else {
            this.currentSlide = Math.min(this.currentSlide + Number(n), this.innerElementsLength - this.perPage);
        }
        this.slideToCurrent();
        this.config.onChange.call(this);

        if (typeof callback === 'function') {
            callback();
        }
    }

    updateAfterDrag = () => {
        const movement = this.drag.endX - this.drag.startX;

        if (movement > 0 && Math.abs(movement) > this.config.threshold) {
            this.prev();
        } else if (movement < 0 && Math.abs(movement) > this.config.threshold) {
            this.next();
        }

        this.slideToCurrent();
    }

    setStyle(target, styles) {
        Object.keys(styles).forEach((attribute) => {
            target.current.style[attribute] = styles[attribute];
        });
    }

    touchStartHandler = (e) => {
        e.stopPropagation();
        this.pointerDown = true;
        this.drag.startX = e.touches[0].pageX;
        this.drag.startY = e.touches[0].pageY;
    }

    touchEndHandler = (e) => {
        e.stopPropagation();
        this.pointerDown = false;
        this.setStyle(this.sliderFrame, {
            webkitTransition: `all ${this.config.duration}ms ${this.config.easing}`,
            transition: `all ${this.config.duration}ms ${this.config.easing}`
        });

        if (this.drag.endX) {
            this.updateAfterDrag();
        }
        this.clearDrag();
    }

    touchMoveHandler = (e) => {
        e.stopPropagation();
        if (this.drag.letItGo === null) {
            this.drag.letItGo = Math.abs(this.drag.startY - e.touches[0].pageY) < Math.abs(this.drag.startX - e.touches[0].pageX);
        }

        if (this.pointerDown && this.drag.letItGo) {
            this.drag.endX = e.touches[0].pageX;

            this.setStyle(this.sliderFrame, {
                webkitTransition: `all 0ms ${this.config.easing}`,
                transition: `all 0ms ${this.config.easing}`,
                [transformProperty()]: `translate3d(${(this.currentSlide * (this.selectorWidth / this.perPage) + (this.drag.startX - this.drag.endX)) * -1}px, 0, 0)`
            });
        }
    }

    render() {
        const { data } = this.props;
        const vpWidth = Math.max(0, typeof window !== 'undefined'  && window.innerWidth || 0);
        const wrapperWidth = vpWidth * (data.length || 0);

        return (
            <div
                ref={this.container}
                className={styles.slides}
                onTouchStart={this.touchStartHandler}
                onTouchEnd={this.touchEndHandler}
                onTouchMove={this.touchMoveHandler}
            >
                <div ref={this.sliderFrame} className={styles.slidesContainer} style={{ width: `${wrapperWidth}px` }} >
                    {
                        data.map((slide, i) => {
                            return (
                                <div key={i} className={styles.slideWrapper} >
                                    <Image className={styles.slide} source={slide.image} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Slides;