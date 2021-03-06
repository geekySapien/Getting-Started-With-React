

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
/*class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planet: "Earth"
        }
        console.log("I am from the constructor() method ");
    }

    componentDidMount() {
        console.log(
            "I am from the componentDidMount() method"
        );
        this.setState({ planet: "Saturn" })
    }

    //static getDerivedStateFromProp(prop, state)
    //{
    //    console.log("I am from get Derived State From Prop");
    //    return {planet:"Saturn"};
    //}
    shouldComponentUpdate(nextProp, nextState)
    {
        console.log("I am from should Component Update");
        console.log({nextProp, nextState});
        return true;
    }
    getSnapshotBeforeUpdate(prevProp, prevState)
    {
        console.log("I am from get Snapshot before Update")
        console.log({prevProp, prevState});
        return true;
    }
    componentDidUpdate()
    {
        console.log("I am from Component Did Update");
        console.log(this.state);

    }
    render() {
        console.log("I am from the render () method");
        return (
            <div>
                <h1>
                    {this.props.name}
                </h1>
                <p>
                    {this.props.description}
                </p>
                <p>
                    {this.state.planet}
                </p>
            </div>

        )
    }

}*/

const User=(props)=>{
    const [planet, setPlanet]=React.useState("Earth");
    console.log(planet);

    //componentDidMount
    //componentWillUnmount                
    React.useEffect(()=>{
        setPlanet("Venus");
        console.log("Component Mounting");
        return console.log("Bye, Bye");
    },[])

    //shouldComponentUpdate
    //componentDidUpdate
    React.useEffect(()=>{
        console.log("Planet changes");
    },[planet])


    return (
        
        <div>
            <h1>
                {props.name}
            </h1>
            <p>
                {props.description}
            </p>
            <h1>
                <button onClick= {()=>setPlanet("Saturn")}>{planet}</button>
            </h1>
            
        </div>

    )
};

export default User;



//Hooks

//use(Then purpose with capital letters)
//useState()