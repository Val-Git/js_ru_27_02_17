import React, {Component} from 'react'
import Comment from './Comment'

class CommentsList extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: true
        }
    }

    render() {
        const {comments} = this.props
        const {isOpen}   = this.state

        if (!comments) return null

        const commentComponents = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
        const body = isOpen ? <ul>{commentComponents}</ul> : null
        const commentTitle = isOpen ? 'Hide comments' : 'Show comments'

        return (
            <div>
                <h4 onClick={this.handleClick}>{commentTitle}</h4>
                {body}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}

export default CommentsList
