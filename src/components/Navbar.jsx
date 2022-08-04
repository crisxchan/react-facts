import ReactIcon from '../assets/react.svg'

export default function Navbar() {
    return (
        <header>
            <img src={ReactIcon} alt="react logo"/>
            <h3>ReactFacts</h3>
            <div id='toggler'>
                <p id='toggler-light'  className='toggler-label'>Light</p>
                <div id='toggler-container'>
                    <div id='toggler-circle'></div>
                </div>
                <p id='toggler-dark'  className='toggler-label'>Dark</p>
            </div>
        </header>
    )
}