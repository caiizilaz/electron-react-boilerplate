import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MemoList from '../components/Memo/MemoList'
import MemoAdd from '../components/Memo/MemoAdd'
import * as memoActions from '../actions/memo'

class MemoPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formValues: {
                text: '',
                editText: '',
                id: 0,
            },
            isEdit: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.create = this.create.bind(this)
        this.editMode = this.editMode.bind(this)
        this.delete = this.delete.bind(this)
        this.edit = this.edit.bind(this)
    }
    componentDidMount() {
        this.props.memoActions.readMemo()
    }
    initState = () => {
        this.setState({
            formValues: {
                text: '',
                editText: '',
                id: 0,
            },
            isEdit: false,
        })
    }
    handleChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        const formValues = this.state.formValues
        formValues[name] = value
        this.setState({ formValues })
    }
    create() {
        this.props.memoActions.createMemo(this.state.formValues)
        this.initState()
    }
    editMode(memo) {
        this.setState({
            formValues: {
                text: '',
                editText: memo.text,
                id: memo.id,
            },
            isEdit: true,
        })
    }
    edit() {
        this.props.memoActions.updateMemo(this.state.formValues)
        this.initState()
    }
    delete(id) {
        this.props.memoActions.deleteMemo(id)
    }
    render() {
        const { memoList } = this.props
        const { formValues, isEdit } = this.state
        return (
            <div>
                <MemoAdd onChange={this.handleChange}
                    formValues={formValues}
                    create={this.create} />
                <MemoList onChange={this.handleChange}
                    memoList={memoList}
                    editMode={this.editMode}
                    isEdit={isEdit}
                    formValues={formValues}
                    initState={this.initState}
                    deleteBtn={this.delete}
                    editBtn={this.edit} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    memoList: state.memo.memoList
})

const mapDispatchToProps = dispatch => ({
    memoActions: bindActionCreators(memoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MemoPage)