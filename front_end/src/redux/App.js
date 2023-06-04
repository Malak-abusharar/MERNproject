import "./App.css";
import "./App.js";


          import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
          import Todos from './components/Todos';
          import TodoDetails from './components/TodoDetails';

const App = () => {
  return (
          <Router>
              <Switch>
                  <Route exact path="/" component={Todos} />
                  <Route path="/todos/:id" component={TodoDetails} />
              </Switch>
          </Router>
          );
};

          export default App;


