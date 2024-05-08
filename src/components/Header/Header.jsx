// function Header() {
//     return (
//         <>
//             <h2>Header</h2>
//         </>
//     )
// }
// export default Header
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import Contacts from '../../pages/Contacts/Contacts'



const App = () => {
    return (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Contacts">Contacts</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Contacts" component={Contacts} />
        </div>
    </Router>
    );
};

export default App;
