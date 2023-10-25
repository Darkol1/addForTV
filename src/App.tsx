import React from 'react';
import {Route, Switch} from 'react-router';
import Home from "./pages/Home";
import PhoneInput from "./pages/PhoneInput";
import Final from "./pages/Final";
import Layout from "./components/Layout";
import Video from './components/Video';
 
const App: React.FC = (): JSX.Element => {
  return(
    <Layout>
        <Video/>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/phone' component={PhoneInput} />
            <Route path='/final' component={Final} />
        </Switch>
    </Layout>
  );
};
 
export default App;

