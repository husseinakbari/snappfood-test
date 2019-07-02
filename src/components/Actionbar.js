import React from 'react'
import {useDispatch} from 'react-redux'
import {handleVisible} from '../store/actions'

const Actionbar = () => {
    const dispatch = useDispatch()
    return (
        <div className="action-bar">
            <h4>Note List</h4>
            <button
                onClick={e => {
                    e.preventDefault();
                    dispatch(handleVisible(true))
                }}
            >
                <span>New Note</span>
            </button>
        </div>
    )
}

export default React.memo(Actionbar)