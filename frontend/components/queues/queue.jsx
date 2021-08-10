import React from 'react';
import { Link } from 'react-router-dom';

class Queue extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        let user = this.props.user
        this.props.getQueues(user.id)
    }

    render() {
        let queues = this.props.queue;
        if(this.props.queue.length > 0){
            return(
                <div>
                    <ul>
                        {queues.map(queue => {
                            return(
                                <li>{queue}</li>
                            )
                        })}
                    </ul>
                </div>
            )
        }else{}
    }
}

export default Queue;