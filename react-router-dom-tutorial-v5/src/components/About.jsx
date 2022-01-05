import React from 'react'
import {useEffect} from 'react';
import { Switch, useHistory, Link, Route, useRouteMatch } from 'react-router-dom';
import View from './View';
import WhyUS from './WhyUS';

function About({login}) {

    const history = useHistory();

    useEffect(() => {
        if(!login) {
            history.push('/');
        }
    }, [login, history])

    const {path, url} = useRouteMatch();

    console.log(path, url);
    return (
        <div>
            <h1>About Page</h1>
           
                <ul className='about-navbar'>
                    <li>
                        <Link to={`${url}/viewabout`}>View About Us</Link>
                        <Link to={`${url}/whyus`}>Why Us?</Link>
                    </li>
                </ul>
            <Switch>
                <Route path={`${path}/viewabout`} component={View}/>
                <Route path={`${path}/whyus`} component={WhyUS}/>
            </Switch>
        </div>
    )
}

export default About
