import React from 'react'
import Sitewrapper from '../components/Sitewrapper';
import {useSelector} from 'react-redux'
import {Actionbar,Notes,Notemodal} from '../components'
 
export default function Home() {
    const {note} = useSelector(state => state)
    console.log('note',note)
    return (
        <Sitewrapper>
            <main className="w100">
                <div className="note-container">
                    <Actionbar />
                    <Notes />
                </div>
            </main>
            {note.visibility ? <Notemodal />  :null}
        </Sitewrapper>
    )
}