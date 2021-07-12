import './App.css';

const AppList = () => {
    const items = ['items 1', 'Items 2', 'Items 3','items 1', 'Items 2', 'Items 3',]
    return (
        <ul>
            {
                items.map((item, index) => <li key={index}>{item}</li>)
            }
        </ul>
    )
}

const AppHeader = () => {
    return (
        <h1 className="header">Bets nitro</h1>
    )
}
const AppInput = () => {
    const placeholder = 'Type text...'
    return (
        <label>
            <input
                placeholder={placeholder}
                type="text"
            />
        </label>
    )
}
const App = () => {
    return (
        <>
            <AppHeader />
            <AppInput />
            <AppList />
        </>
    )
}


export default App;
