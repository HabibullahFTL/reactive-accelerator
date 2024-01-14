
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

const MyComponent = () => {
    return (<h2>This is  heading 2</h2>)
}

ReactDOM.createRoot(document.getElementById('root')).render(<MyComponent />)