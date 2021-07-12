

//This is a Functional Component

//const User = (props) => {
//    return (
//        <div>
//            <h1>{props.name}</h1>
//            <p>{props.description}</p>
// //       </div>
//    )
//}
//export default User;


////props=properties/parameters


//This is a Class Component

import React from 'react';
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planet: "Earth"
        }
    }
    render() {
        return (
            <div>
                <h1>
                    {this.props.name}
                </h1>
                <p>
                    {this.props.description}
                </p>
            </div>

        )
    }

}

export default User;