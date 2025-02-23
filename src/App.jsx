function UserProfile(props) {
    return (
        <h1>Hello, {props.name}, Your age is {props.age}, and you work as a {props.job}</h1>
    );
}

function App() {
    return (
        <div>
            <UserProfile name="Alice" age={21} job="engineer" />
        </div>
    );
}

export default App;