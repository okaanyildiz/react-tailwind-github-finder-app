import { createContext, useReducer } from 'react'
import axios from 'axios'
import GithubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export function GithubProvider({ children }) {
    // Api data trackers
    const initialState = { users: [], loading: false }
    const [state, dispatch] = useReducer(GithubReducer, initialState)

    // Fetch initial users for testing the app
    async function fetchUsers() {
        setLoading()
        const response = await axios.get(`${GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        // Get users
        dispatch({
            type: 'GET_USERS',
            payload: response.data
        })
    }
    // Set loading
    function setLoading() {
        dispatch({
            type: 'SET_LOADING'
        })
    }

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                loading: state.loading,
                fetchUsers
            }}
        >
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext