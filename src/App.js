import React from 'react';
import './App.css';
import Nav from './components/navigation/Nav.jsx';
import FullProfileContainer from './components/main/fullProfile/fullProfileContainer.jsx';
import HeaderContainer from './components/header/HeaderContainer.jsx';
import UsersContainer from "./components/users/UsersContainer.jsx"
import Groups from "./components/groups/Groups.jsx"
import Contacts from "./components/contacts/Contacts.jsx"
import Help from "./components/help/Help.jsx"
import { BrowserRouter, Route } from 'react-router-dom';
import MessagesContainer from './components/messages/MessagesContainer';

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <HeaderContainer />
                    <Nav />
                    <div className="content">
                        <Route path="/profile/:whichProfile" render={() => 
                            <FullProfileContainer />
                        } />
                        <Route path="/messages" render={() =>
                            <MessagesContainer />
                        } />
                        <Route path="/users" component={UsersContainer} />
                        <Route path="/groups" component={Groups} />
                        <Route path="/help" component={Help} />
                        <Route path="/contacts" component={Contacts} />
                        {/* <Messages /> */}
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;