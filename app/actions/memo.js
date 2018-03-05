import * as Model from '../dbmodules/operations/memo'

export const READ_MEMO_BEGIN = 'READ_MEMO_BEGIN';
export const READ_MEMO_SUCCESS = 'READ_MEMO_SUCCESS';



export const readMemoBegin = () => ({
  type: READ_MEMO_BEGIN
});

export const readMemoSuccess = memo => ({
  type: READ_MEMO_SUCCESS,
  payload: { memo }
});

export function readMemo() {
  return dispatch => {
    dispatch(readMemoBegin());
    return Model.read((res) => {
      console.log(res)
      dispatch(readMemoSuccess(res));
      return res;
    })
  };
}