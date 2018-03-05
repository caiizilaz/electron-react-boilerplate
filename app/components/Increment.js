import React, { Component } from 'react'
import styles from './Counter.css';

export default class Increment extends Component<Props> {
    props: Props;
    render() {
        const {
            increment
        } = this.props;
        return (
            <button className={styles.btn} onClick={increment} data-tclass="btn">
                <i className="fa fa-plus" />
            </button>
        )
    }
}