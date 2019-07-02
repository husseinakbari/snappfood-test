import React from 'react'
import Sitewrapper from '../components/Sitewrapper';
import {useSelector} from 'react-redux'

export default function Home() {
    const store = useSelector(state => state)
    console.log('store',store)
    return (
        <Sitewrapper>
            <h4>Home Page</h4>
        </Sitewrapper>
    )
}