function Message() {
    const name = 'Mr Mudney';
    if (name)
    {
        return <h1>Hello {name}</h1>;
    }else{
        return <h1>Hello Stranger</h1>;
    }
}

export default Message;