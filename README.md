react-tailwind-github-finder-app

Steps to take

SETTING UP TAILWIND AND DAISY UI

1) Create a new react app. 
2) Go to Tailwind doc: https://tailwindcss.com/docs/guides/create-react-app
3) Install Tailwind. 
4) Go to DaisyUI doc: 
https://daisyui.com/docs/install/
5) Install DaisyUI. 
6) The tailwind.config.js must be in that way: 
```

module.exports = {
 purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
 content: ['./src/**/*.{js,jsx,ts,tsx}'],
 theme: {
   extend: {},
 },
 plugins: [require('daisyui')],
 daisyui: {
   themes: ['dark'],
 },
};

```
7) Run npm start. Or restart the server.
8) Install react router and react icons: 
npm install react-router-dom@6 react-icons
9) This code uses ReactRouter6.

MAKING THE NAVBAR COMPONENT

1) Create a components folder in the src folder. 
2) Create a layout folder in the components folder. 
3) Inside the layout folder, create the Navbar.jsx
6) Go to the App.js
7) Import Navbar.jsx
7) Place the Navbar inside App().
8) Under the div, place the ‘main’ element, with a content of ‘Content’.
8) Go to the Navbar.jsx.
9) Import into Navbar.jsx:
```
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
```
10) Pass {title} with destructuring as the argument of Navbar(). 
11) Then define the default props. 
```
Navbar.defaultProps = {
   title: 'Github Finder'
}

```
12) Define the prop types. 
```
Navbar.propTypes = {
   title: PropTypes.string,
}
```

13) Inside the Navbar(), type the code shown below:

Navbar.jsx : 
```
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
 
function Navbar({ title }) {
   return (
       <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
           <div className='container mx-auto'>
               <div className='flex-none px-2 mx-2'>
                   <FaGithub className='inline pr-2 text-3xl' />
                   <Link to='/' className='text-lg font-bold align-middle'>
                       {title}
                   </Link>
               </div>
 
               <div className='flex-1 px-2 mx-2'>
                   <div className='flex justify-end'>
                       <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                           Home
                       </Link>
                       <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                           About
                       </Link>
                   </div>
               </div>
 
           </div>
       </nav>
   )
}
 
Navbar.defaultProps = {
   title: 'Github Finder'
}
Navbar.propTypes = {
   title: PropTypes.string,
}
 
export default Navbar

```


MAKING THE FOOTER COMPONENT

1) Inside the components/layouts folder create Footer.jsx
2) Above the return statement of Footer(), add the footerYear const, which shows the updated date.
3) Make your footer element. 
4) In the footer add that svg in the code below. 
5) Add footerYear const with curly braces in the copyright section.
6) Add the footer to the App.js

```
function Footer() {
   const footerYear = newDate().getFullYear()
 
   return (
       <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
           <div>
               <svg
                   width='50'
                   height='50'
                   viewBox='0 0 24 24'
                   xmlns='http://www.w3.org/2000/svg'
                   fillRule='evenodd'
                   clipRule='evenodd'
                   className='inline-block fill-current'
               >
                   <path d='M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z'></path>
               </svg>
               <p>Copyright &copy; {footerYear} All rights reserved</p>
           </div>
       </footer>
   )
}
 
export default Footer

```

MAKING THE PAGES AND ROUTES

1) Inside the src folder, create the “pages” folder. 
2) Inside the pages folder, create the Home.jsx, About.jsx and NotFound.jsx files. 
3) Inside these pages add the jsx code shown below.
3) Go to the App() function. Inside the “main” element make the routes for the “Home Page”, the “About Page”, the “not found Page”.
4) The Home page will include the user search module. 

App.js :

```
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
 
function App() {
 return (
   <Router>
     <div className="flex flex-col justify-between h-screen">
       <Navbar />
 
       <main>
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/about' element={<About />} />
           <Route path='/notfound' element={<NotFound />} />
         </Routes>
       </main>
 
       <Footer />
     </div>
   </Router>
 )
}
 
export default App

```
About.jsx :

```
function About() {
   return (
       <>
           <h1 className='text-6xl mb-4'>Github Finder</h1>
           <p className='mb-4 text-2xl font-light'>
               A React app to search GitHub profiles and see profile details.
           </p>
           <p className='text-lg text-gray-400'>
               Version <span className='text-white'>1.0.0</span>
           </p>
       </>
   )
}
 
export default About

```
NotFound.jsx:

```
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
 
function NotFound() {
   return (
       <div className='hero'>
           <div className='text-center hero-content'>
               <div className='max-w-lg'>
                   <h1 className='text-8xl font-bold mb-8'>Hmmm…</h1>
                   <p className='text-5xl mb-8'>404 - Page Not Found!</p>
                   <Link className='btn btn-primary btn-lg' to='/'>
                       <FaHome className='mr-2' />
                       Back To Home
                   </Link>
               </div>
           </div>
       </div>
   )
}
 
export default NotFound

```

GETTING TOKEN FROM THE GITHUB API

1) The App we will show the user Github Profiles. We can get example data via the Postman searching for https://api.github.com/users/[user]. 
2) Go to Github and generate a new access token in developer settings. That token must include “repo” and “user”. 
3) Inside the project folder make the “.env” file. Store the access token here:

REACT_APP_GITHUB_URL = "https://api.github.com"
REACT_APP_GITHUB_TOKEN = "[access token]"

4) Restart the react server. 
5) In the home page wrap the h1 element with a div. 
6) Write that line under the h1 element in that div. 
{process.env.REACT_APP_GITHUB_TOKEN}
7) After monitoring the access token in the homepage, delete the process code. 

MAKING THE USERRESULTS COMPONENT

1) Inside the components folder make the “users” folder. 
2) In that folder create the UserResults.jsx file. 
3) Go to the Home.jsx. Import UserResults(). 
4) Add the <UserResults /> inside the div. 
5) Install-Import “axios”, “useEffect” “useState” into the UserResults.jsx. 
6) Inside the UserResults(), make the asynchronous function fetchUsers() to fetch the users from Github Api. Assign the data to the response const. And console.log “response.data” to reach the users array.
7) You can see an array of 30 users inside the response in the console. 
8) Make the useEffect hook.
9) Call the fetchUsers() inside useEffect.
10) Above the useEffect hook, create two useState hook:
```
const [users, setUsers] = useState([])
const [loading, setLoading] = useState(true)

 ```
11) Instead of console logging the response, use setUsers. 
12) Under that function, use setLoading(false). 
13) In the div of the return statement add the tailwind classes in the code below. 
14) In that div we will map through the users. 
15) With map() method, map the users  and show the data in an h3 element. To reach the users we have to map “login”. 
16) Now you can display the users in the home page.
17) If we wait for the data we will show a “Loading…” warning. So we will add an if statement for conditional rendering. 
18) Wrap the return statement with an if conditional. If the data doesn’t show up, display an h3 element with a “Loading…” content. 
UserResults.jsx :

```
import axios from 'axios'
import { useEffect, useState } from 'react'
 
function UserResults() {
 
   // Api data trackers
   const [users, setUsers] = useState([])
   const [loading, setLoading] = useState(true)
 
   useEffect(() => {
       fetchUsers()
   }, [])
 
   // Fetch users from the api
   async function fetchUsers() {
       const response = await axios.get(`${process.env.REACT_APP_GITHUB_URL}/users`, {
           headers: {
               Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
           }
       })
       // Add .data to reach the users array
       setUsers(response.data)
       setLoading(false)
   }
   // Add a conditional rendering in case of a delay
   if (!loading) {
       return (
           <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
               // List the users
               {users.map((user) => (
                   <h3>{user.login}</h3>
               ))}
           </div>
       )
   } else {
       return (
           <h3>Loading...</h3>
       )
   }
}
 
export default UserResults

```

ADDING THE LOADING SPINNER

1) Inside the layouts folder, create the “assets” folder. 
2) Add a spinner gif inside the assets folder. 
3) Inside the layouts folder create Spinner.jsx
4) Import the spinner gif into the Spinner.jsx
5) Make the necessary visual adjustments the way that the code below. 

Spinner.jsx: 

```
import spinner from './assets/spinner.gif'
 
function Spinner() {
   return (
       <div className='w-100 mt-20'>
           <img
               width={180}
               className='text-center mx-auto'
               src={spinner}
               alt='Loading...'
           />
       </div>
   )
}
 
export default Spinner

```

6) Go to UserResults.jsx. Import the Spinner.jsx. 
7) Replace “Loading…” with Spinner

UserResults.jsx : 

```
if (!loading) {
       return (
           <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
               // List the users
               {users.map((user) => (
                   <h3>{user.login}</h3>
               ))}
           </div>
       )
   } else {
       return (
           <Spinner />
       )
   }

```

MAKING THE USERITEM COMPONENT

1) Inside the users folder, create the UserItem.jsx. 
2) Inside the UserResults.jsx, import the UserItem.jsx
3) Inside UserResults() function, replace the h3 with UserItem. 
4) UserItem will get 2 props: key as “user.id” and user as “user”. 

UserResults.jsx :

```
<div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
               // List the users
               {users.map((user) => (
                   <UserItem key={user.id} user={user} />
               ))}
           </div>

```
5) Go to the UserItem.jsx, import prop-types. 
6) In the UserItem() function make “user” as an argument with destructuring. 
7) Set the user’s prop type as “object.isRequired”
8) Inside the UserItem() function’s arguments, add “login” and “avatar_url” as the properties of the user with destructuring. 
9) Now we can return “login” and “avatar_url” directly inside the return statement of the UserItem(). 
10) Add jsx shown in the code below. 
11) Add the login and avatar into the jsx. 
12) Import Link from React Router. Add a router link under the login h2. That link will go to each “user.login”

UserItem.jsx : 

```
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
 
function UserItem({ user: { login, avatar_url } }) {
   return (
       <div className='card shadow-md compact side bg-base-100'>
           <div className='flex-row items-center space-x-4 card-body'>
               <div>
                   <div className='avatar'>
                       <div className='rounded-full shadow w-14 h-14'>
                           <img src={avatar_url} alt='Profile' />
                       </div>
                   </div>
               </div>
               <div>
                   <h2 className='card-title'>{login}</h2>
                   <Link
                       className='text-base-content text-opacity-40'
                       to={`/users/${login}`}
                   >
                       Visit Profile
                   </Link>
               </div>
           </div>
       </div>
   )
}
 
UserItem.propTypes = {
   user: PropTypes.object.isRequired
}
 
export default UserItem

```

SETTING UP GITHUB CONTEXT

1) We’re going to have more than one context. 
2) Inside the components folder, create the context folder. 
3) Inside the context folder, create the github folder. 
4) Inside the github folder, create GithubContext.js. 
5) Import createContext into the GithubContext.js
6) Declare GithubContext as createContext()
7) Shorten the Github Url and Github token with two consts. 
8) Make the GithubProvider({children}) function to export. 
9) Copy two Api data tracker useState const in the UserResults.jsx and paste into the provider function. Import useState into the GithubContext.js
10) Copy the fetchUsers() function from UserResults() and paste it under the useState hooks in the provider function. Import axios into the GithubContext.js
11) We can rearrange the fetchUser() function with GITHUB_URL and GITHUB_TOKEN consts. 
12) At the bottom of the provider function, return GithubContext.Provider
12) <GithubContext.Provider> will have the destructured “users” and “loading” and “fetchUsers” props. And it will contend with {children}. 
13) Eventually export default GithubContext. 
14) Context has to wrap the components. 
15) Go to App.js. Import GithubProvider() function from GithubContext.js
16) Wrap all the code inside the return statement with the GithubProvider.
17) Now we have to clear UserResults.jsx
18) Delete the fetchUsers function and useState consts we have copied. 
19) Remove useState and add useContext into import statements. Delete axios import. 
20) Import GithubContext. 
21) On top of the UseResults() function add the destructured useContext const: 
const {users, loading, fetchUsers} = useContext(GithubContext)

UserResults.jsx :
```
import { useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GithubContext from '../context/github/GithubContext'
 
function UserResults() {
   // Api data tracker
   const { users, loading, fetchUsers } = useContext(GithubContext)
 
   // Fetch users from the api
   useEffect(() => {
       fetchUsers()
   }, [])
 
   // Add a conditional rendering in case of a delay
   if (!loading) {
       return (
           <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
               // List the users
               {users.map((user) => (
                   <UserItem key={user.id} user={user} />
               ))}
           </div>
       )
   } else {
       return (
           <Spinner />
       )
   }
}
export default UserResults
```

GithubContext.js : 
```
import { createContext, useState } from 'react'
import axios from 'axios'
 
const GithubContext = createContext()
 
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
 
export function GithubProvider({ children }) {
   // Api data trackers
   const [users, setUsers] = useState([])
   const [loading, setLoading] = useState(true)
 
   // Fetch users from the api
   async function fetchUsers() {
       const response = await axios.get(`${GITHUB_URL}/users`, {
           headers: {
               Authorization: `token ${GITHUB_TOKEN}`
           }
       })
 
       // Add .data to reach the users array
       setUsers(response.data)
       setLoading(false)
   }
   return <GithubContext.Provider value={{
       users,
       loading,
       fetchUsers
   }}>
       {children}
   </GithubContext.Provider>
}
export default GithubContext

```

App.js :
```
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { GithubProvider } from './components/context/github/GithubContext'
 
function App() {
 return (
   <GithubProvider>
     <Router>
       <div className="flex flex-col justify-between h-screen">
         <Navbar />
 
         <main>
           <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/about' element={<About />} />
             <Route path='/notfound' element={<NotFound />} />
           </Routes>
         </main>
 
         <Footer />
       </div>
     </Router>
   </GithubProvider>
 )
}
 
export default App
```

MAKING THE REDUCER HOOK

1) Inside the Github folder, create the GithubReducer.js file. 
2) Make the GithubReducer function with the arguments: state and action. 
3) State is the current state. 
4) Action is going to be an object. By the help of the action we will evaluate the data. 
5) Go to GithubContext.js. Switch useState with useReducer in the import statements. From now on we will use the Reducer hook to track the state. 
6) Import GithubReducer.js
7) Inside the GithubProvider() function, delete the useState consts. Add and initialState object const, that shows the initial state: 
const initialState = { users: [ ], loading: false }
8) Under that const, make the reducer hook: 
const [state, dispatch] = useReducer(GithubReducer, initialState)
9) Instead of functions of useState, we’re going to use dispatch function. 
10) Delete the setUsers() and setLoading() inside the fetchUsers() function. Instead, write the dispatch function :
```
dispatch({
           type: 'GET_USERS',
           payload: data
       })
```

11) We’re going to use the properties of dispatch() in the GithubReducer() function. “Payload” will be the data we fetch from the api. 
12) Now inside the Githubprovider() function, we have to update GithubContext.Provider : 

```
return <GithubContext.Provider
   value={{
       users: state.users,
       loading: state.loading,
       fetchUsers
   }}>
       {children}
   </GithubContext.Provider>

```
Because now we’re dealing with the “state”. 

GithubContext.js : 
```
import { createContext, useReducer } from 'react'
import axios from 'axios'
import GithubReducer from './GithubReducer'
 
const GithubContext = createContext()
 
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
 
// Context provider function
export const GithubProvider = ({ children }) => {
   // Api data tracker
   const initialState = {
       users: [],
       loading: false
   }
   const [state, dispatch] = useReducer(githubReducer, initialState)
 
   // Fetch users from the api
   async function fetchUsers() {
       const response = await axios.get(`${GITHUB_URL}/users`, {
           headers: {
               Authorization: `token ${GITHUB_TOKEN}`
           }
       })
 
       dispatch({
           type: 'GET_USERS',
           payload: data
       })
   }
   return <GithubContext.Provider
       value={{
           users: state.users,
           loading: state.loading,
           fetchUsers
       }}>
       {children}
   </GithubContext.Provider>
}
 
export default GithubContext
```

GETTING RID OF FETCHING USERS

1) Fetching some user’s data was only for testing the App. So we don’t need them anymore. 
2) Add a switch statement inside the githubReducer(). 
3) The switch statement will have the “action.type” as the expression.
4) First case “GET_USERS” will get the users from the api. Since we get the response, that case will stop loading and change it from true to false. 
5) And right before we make any requests we want to change the loading as true. 
6) So we’ll add another case as “SET_LOADING” And that case will set loading if we wait for the response. 
7) Now inside the fetchUsers() function in GithubContext.js, beneath the dispatch() function, add the setLoading() function. This function will trigger the dispatch({type: SET_LOADING}) function. 
8) Call the setLoading() function on top of the fetchUsers() function.
9) Now we can get rid of useEffect and fetchUsers(). 
10) Go to UserResults.jsx. Delete the entire useEffect hook. Delete the fetchUsers from useContext hook. Remove the useEffect from the import statements. 
11) Now we cannot see the default 30 first at home page anymore. Next thing we’re going to do is to make the UserSearch component.

GithubContext.js :
```
import { createContext, useReducer } from 'react'
import axios from 'axios'
import githubReducer from './GithubReducer'
 
const GithubContext = createContext()
 
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
 
// Context provider function
export function GithubProvider({ children }) {
   // Api data tracker
   const initialState = {
       users: [],
       loading: false
   }
   const [state, dispatch] = useReducer(githubReducer, initialState)
 
   // Fetch initial users for testing purposes
   async function fetchUsers() {
       setLoading()
       const response = await axios.get(`${GITHUB_URL}/users`, {
           headers: {
               Authorization: `token ${GITHUB_TOKEN}`
           }
       })
 
       dispatch({
           type: 'GET_USERS',
           payload: response.data
       })
   }
 
   function setLoading() {
       dispatch({ type: 'SET_LOADING' })
   }
 
   return <GithubContext.Provider
       value={{
           users: state.users,
           loading: state.loading,
           searchUsers,
       }}>
       {children}
   </GithubContext.Provider>
}
 
export default GithubContext

```

 GithubReducer.js :

const githubReducer = (state, action) => {
   switch (action.type) {
       case 'GET_USERS':
           return {
               ...state,
               users: action.payload,
               loading: false,
           }
        case 'SET_LOADING':
           return {
               ...state,
               loading: true,
           }
       default:
           return state
   }
}
 
export default githubReducer
 

```
