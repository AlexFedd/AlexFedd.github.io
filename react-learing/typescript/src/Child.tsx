interface Props {
    name: string,
    email: string,
    age: number,
    friends: string[]
}

function Child(props: Props) {
    return ( <div>
        <h1>{props.name}</h1>
        <h1>{props.email}</h1>
        <h1>{props.age}</h1>
        {props.friends.map((friend: string) => {
            return <h1>{friend}</h1>
        })}
    </div> );
}

export default Child;