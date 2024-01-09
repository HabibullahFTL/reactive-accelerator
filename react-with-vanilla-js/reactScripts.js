
const Counter = ({ title }) => {
    const [quantity, setQuantity] = React.useState(0);

    const handleOnClick = () => {
        setQuantity(quantity + 1)
    }

    return (<div>
        <h2>{title}</h2>
        <input disabled="true" value={quantity} />
        <button onClick={handleOnClick}>+</button>
    </div>)
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.Fragment>
        <Counter title="Counter 1" />
        <Counter title="Counter 2" />
    </React.Fragment>
)