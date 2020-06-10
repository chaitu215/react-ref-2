import React from 'react';

class Child extends React.Component {
    constructor(props){
        super(props)
        this.subHeaderRef = null
        this.setSubHeaderRef = element => {
            this.subHeaderRef = element
        }
    }

    componentDidUpdate(){
        const { parentContainerClicked} = this.props
        // true
        if(parentContainerClicked){
            this.subHeaderRef.classList.add('blue')
        }
    }

    render(){
        return <div>
             <h2 ref={this.setSubHeaderRef}>Child Component</h2>
        </div>
    }
}

export default Child;