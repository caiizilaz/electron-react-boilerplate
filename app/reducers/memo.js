import { BEGIN, READ_MEMO_SUCCESS, CREATE_MEMO_SUCCESS, DELETE_MEMO_SUCCESS, UPDATE_MEMO_SUCCESS } from '../actions/memo'

const initialState = {
    memoList: [],
    loading: false,
}

export type memoStateType = {
    memoList: object[];
    loading: boolean;
}

type actionType = {
    type: string;
}

export default function memo(state: memoStateType = initialState, action: actionType) {
    switch (action.type) {
        case BEGIN:
            return {
                ...state,
                loading: true
            }

        case READ_MEMO_SUCCESS:
            return {
                ...state,
                loading: false,
                memoList: action.payload.memo
            }

        case CREATE_MEMO_SUCCESS:
            return {
                ...state,
                memoList: state.memoList.concat(action.payload.memo),
                loading: false
            }
        case UPDATE_MEMO_SUCCESS:
            return {
                ...state,
                memoList: state.memoList.map(memo => memo.id === action.payload.memo.id ? action.payload.memo : memo),
                loading: false
            }
        case DELETE_MEMO_SUCCESS:
            return {
                ...state,
                memoList: state.memoList.filter(memo => memo.id !== action.payload.memo),
                loading: false
            };

        default:
            return state
    }
}
