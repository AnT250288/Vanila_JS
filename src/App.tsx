import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const names = ["Dimich", "Victor", "Sergey", "Ignat"]
    const users = [
        {id: 1, name: "Dimich"},
        {id: 2, name: "Victor"},
        {id: 3, name: "Sergey"},
        {id: 4, name: "Ignat"}
    ]
    const ulElements = names.map(name => <li>{name}</li>)
    const usersElements = users.map(u => <li key={u.id}>{u.name}</li>)

    return (
        <div className="App">
            <ul>
                {/*{ulElements}*/}
                {usersElements}
            </ul>
        </div>
    );
}

export default App;
