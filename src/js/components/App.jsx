import React from 'react';
import List from './List';
import Form from './Form.jsx';
import SearchAppBar from './AppBar';

const App = () => (
    <div className="row mt-5">
        <SearchAppBar />
        <div className="col-md-4 offset-md-1">
        <List />
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Add a new article</h2>
            <Form />
        </div>
    </div>
);

export default App;