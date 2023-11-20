import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

const HasNav=({children})=>{
    const isLocation = useLocation();
    const [showNavBar, setShowNavBar] = useState(false);
    useEffect(()=>{
        console.log(location.pathname);
        (location.pathname == '/Login' || location.pathname == '/SignUp') ? setShowNavBar(false) : setShowNavBar(true);
    }, [location])
    return(
    <div>{showNavBar && children}</div>
    )
};

export default HasNav;