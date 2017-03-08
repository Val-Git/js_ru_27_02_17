import React from 'react'

export default (CustomComponent) => class DecoratedComponent extends React.Component {
    state = {
        openItemId: null
    }

    toggleAccordion = openItemId => ev => {
        ev.preventDefault()
        this.setState({
            openItemId
        })
    }

    render() {
        return <CustomComponent {...this.props} {...this.state} toggleAccordion={this.toggleAccordion} />
    }
}