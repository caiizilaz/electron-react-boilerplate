import { READ_MEMO_BEGIN, READ_MEMO_SUCCESS } from '../actions/memo'

const initialState = {
    memoList: [],
    loading: false,
};

export default function memo(state = initialState, action) {
    switch (action.type) {
        case READ_MEMO_BEGIN:
            return {
                ...state,
                loading: true
            };

        case READ_MEMO_SUCCESS:
            return {
                ...state,
                loading: false,
                memoList: action.payload.memo
            };


        default:
            return state;
    }
}
