import React from 'react'
import Contact from './pages/Contact'
import About from './pages/About'
import Movie from './pages/Movie'
import { BrowserRouter as Router,Switch,Route ,Link} from 'react-router-dom'


const App =()=> {
  
    return (
      <Router>
        <div>
          <Link to ="/">Home</Link>
          <Link to ="/contact">Contact</Link>
          <Link to ="/movie">Movie</Link>
         
          <Switch>
            <Route exact path ="/">
              <About />
            </Route>
            <Route path = "/contact">
             <Contact />
            </Route>
            <Route path = "/movie">
              <Movie/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
export default App




