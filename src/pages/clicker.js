import React, {useState} from 'react';

const Clicker = () => {
    const [clicks, setClicks] = useState(0)
    const [upgradeLevel, setUpgradeLevel] = useState(1)

    const handleClick = () => {
        setClicks(clicks + upgradeLevel);
        
    };

    const handleUpgrade = () => { 
        if(clicks >= upgradeLevel * 10) {
            setClicks(clicks - upgradeLevel * 10)
            setUpgradeLevel(upgradeLevel + 1);
        }
    };
    return (
        <div className='App'>
            <h1>Clicker game</h1>
            <p>Монет: {clicks}</p>
            <p>Upgrade level: {upgradeLevel}</p>
            <button onClick={handleClick} className='btn_click'>Click me!</button>
            <button onClick={handleUpgrade} className='btn_upgrade'>Поднять уровень? {upgradeLevel * 10}</button>
        </div>
    );
}

export default Clicker;