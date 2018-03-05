import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MemoList from '../components/Memo/MemoList'
import * as MemoActions from '../actions/memo'

class MemoPage extends Component {

    componentDidMount() {
        this.props.memoActions.readMemo()
    }

    render() {

        return (
            <div>
                <MemoList memoList={this.props.memoList} />
            </div>
        )
    }

}

const mapStateToProps = state => ({
    memoList: state.memo.memoList
});

const mapDispatchToProps = dispatch => ({
    memoActions: bindActionCreators(MemoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MemoPage)
