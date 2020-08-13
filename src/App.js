import React, { useEffect } from 'react';
import { httpRequest } from './helpers/httpService';
import { apiUrl } from './config/env';

function App() {
    useEffect(() => {
        httpRequest(apiUrl + "/todos/10", "GET")
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="App">
            Hilu
        </div>
    );
}

export default App;
