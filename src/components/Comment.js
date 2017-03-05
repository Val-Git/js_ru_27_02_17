import React from 'react'

export default (props) => {
    const {comment} = props

    return (
        <div>
            <b>{comment.user}:</b>
            <section>{comment.text}</section>
        </div>
    )
}
