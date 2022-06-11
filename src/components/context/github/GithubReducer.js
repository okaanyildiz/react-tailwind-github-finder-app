function GithubReducer(state, action) {

    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
    return (
        <div>GithubReducer</div>
    )
}

export default GithubReducer