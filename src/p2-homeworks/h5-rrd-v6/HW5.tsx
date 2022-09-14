import React from 'react'
import Header from './Header'
import Pages from './Pages'
import {BrowserRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            {/*<HashRouter>*/}

            <BrowserRouter>
                <Header/>

                <Pages/>
            </BrowserRouter>

            {/*</HashRouter>*/}
        </div>
    )
}

export default HW5
