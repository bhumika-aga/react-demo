/* Javascript */

/*
function Welcome() {
    return (
        <h1>Welcome to the App!</h1>
    );
}

export default Welcome;
*/

/* ES6 */

const Welcome = (props) => {
    return (
        <h1>Welcome to the App, {props.name}!</h1>
    );
}

export default Welcome;