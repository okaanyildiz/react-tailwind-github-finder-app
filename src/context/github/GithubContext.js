import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export function GithubProvider({ children }) {
    // Api data tracker
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    // Get single user
    async function getUser(login) {
        setLoading()

        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        })

        if (response.status === 404) {
            window.location = '/notfound'
        } else {
            const data = await response.json()

            dispatch({
                type: 'GET_USER',
                payload: data,
            })
        }
    }

    // Get user repos
    async function getUserRepos(login) {
        setLoading()

        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10,
        })

        const response = await fetch(
            `${GITHUB_URL}/users/${login}/repos?${params}`,
            {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                },
            }
        )

        const data = await response.json()

        dispatch({
            type: 'GET_REPOS',
            payload: data,
        })
    }

    // Clear users from state
    function clearUsers() { dispatch({ type: 'CLEAR_USERS' }) }

    // Set loading
    function setLoading() { dispatch({ type: 'SET_LOADING' }) }

    return (
        <GithubContext.Provider
            value={{
                ...state,
                clearUsers,
                getUser,
                getUserRepos,
                dispatch
            }}
        >
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext
