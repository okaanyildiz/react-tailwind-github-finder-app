import { createContext, useReducer } from 'react'
import GithubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export function GithubProvider({ children }) {
    // Api data tracker
    const initialState = {
        users: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    // Get search results
    async function searchUsers(text) {
        setLoading()

        const params = new URLSearchParams({
            q: text,
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        })
        // Destructure the data, we need only items from the coming data.
        const { items } = await response.json()

        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
    }
    // Clear users
    function clearUsers() {
        dispatch({
            type: 'CLEAR_USERS'
        })
    }

    // Set loading
    function setLoading() {
        dispatch({ type: 'SET_LOADING' })
    }

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                loading: state.loading,
                searchUsers,
                clearUsers
            }}
        >
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext
