import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Projects from './pages/Home'

function App() {
  return (
    <Switch>
      <Route
        path="/projects/:name"
        render={ (props) => (
          <Projects
            { ...props }
          />
          ) }
      />
      <Route path="/" component={ Home } />


    </Switch>
  );
}

export default App;
