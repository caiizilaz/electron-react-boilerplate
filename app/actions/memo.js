import * as Model from '../dbmodules/operations/memo'

export const BEGIN = 'BEGIN'

export const READ_MEMO_SUCCESS = 'READ_MEMO_SUCCESS'
export const begin = () => ({
  type: BEGIN
})
export const readMemoSuccess = memo => ({
  type: READ_MEMO_SUCCESS,
  payload: { memo }
})
export function readMemo() {
  return dispatch => {
    dispatch(begin())
    return Model.read((res) => {
      dispatch(readMemoSuccess(res))
      return res
    })
  }
}

export const CREATE_MEMO_SUCCESS = 'CREATE_MEMO_SUCCESS'
export const createMemoSuccess = memo => ({
  type: CREATE_MEMO_SUCCESS,
  payload: { memo }
})
export function createMemo(memo) {
  return dispatch => {
    dispatch(begin())
    return Model.create((res) => {
      dispatch(createMemoSuccess(res.dataValues))
      return res.dataValues
    }, memo)
  }
}

export const UPDATE_MEMO_SUCCESS = 'UPDATE_MEMO_SUCCESS'
export const updateMemoSuccess = memo => ({
  type: UPDATE_MEMO_SUCCESS,
  payload: { memo }
})
export function updateMemo(memo) {
  const params = {id:memo.id, text:memo.editText}
  return dispatch => {
    dispatch(begin())
    return Model.update((res) => {
      dispatch(updateMemoSuccess(params))
      return params
    }, params)
  }
}

export const DELETE_MEMO_SUCCESS = 'DELETE_MEMO_SUCCESS'
export const deleteMemoSuccess = memo => ({
  type: DELETE_MEMO_SUCCESS,
  payload: { memo }
})
export function deleteMemo(id) {
  return dispatch => {
    dispatch(begin())
    return Model.delete((res) => {
      dispatch(deleteMemoSuccess(id))
      return id
    }, id)
  }
}