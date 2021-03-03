import React from 'react';
import './App.css';
import Nav from './components/navigation/Nav.jsx';
import FullProfile from './components/main/fullProfile/fullProfile.jsx';
import Header from './components/header/Header.jsx';
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
                    <Header />
                    <Nav />
                    <div className="content">
                        <Route path="/profile" render={() => 
                            <FullProfile />
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