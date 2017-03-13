import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {

    static propTypes = {
        comments: PropTypes.array
    }

    static defaultProps = {
        comments: []
    }

    state = {
        name: '',
        message: ''
    }

    componentDidUpdate() {
        this.size = this.container.getBoundingClientRect()
    }

    render() {
        const {isOpen, toggleOpen} = this.props
//        console.log('---', this.size)
        return (
            <div ref={this.getContainerRef}>
                <a href="#" onClick={toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
                {this.getBody()}
                {this.getCommentForm()}
            </div>
        )
    }

    getContainerRef = (ref) => {
        this.container = ref
        if (ref) {
            this.size = ref.getBoundingClientRect()
        }
    }

    getBody() {
        const {comments, isOpen} = this.props
        if (!isOpen) return null

        if (!comments.length) {
            return <div>
                <h3>
                    No comments yet
                </h3>
            </div>
        }

        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)
        return (
            <div>
                <ul>
                    {commentItems}
                </ul>
            </div>
        )
    }

    //форму стоит вынести в отдельный компонент
    getCommentForm() {
        const {isOpen} = this.props
        if (!isOpen) return null

        return (
            <form>
                Enter your name:
                <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
                Enter your message:
                <textarea value={this.state.message} onChange={this.handleMessageChange} />
                <input type="submit" value="Submit" />
            </form>
        )
    }

    handleNameChange = ev => {
        if (ev.target.value.length > 10) return

        this.setState({
            name: ev.target.value
        })
    }

    handleMessageChange = ev => {
        if (ev.target.value.length > 150) return

        this.setState({
            message: ev.target.value
        })
    }


}

export default toggleOpen(CommentList)
