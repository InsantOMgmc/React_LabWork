import React, { useState } from 'react';

const Clicker = () => {
    const [clicks, setClicks] = useState(0)
    const [upgradeLevel, setUpgradeLevel] = useState(1)
    const [expanded, setExpanded] = useState(false)
    const [blockHeigth, setBlockHeight] = useState('100px')
    const [hiden, setHiden] = useState('none')
    const handleClick = () => {
        setClicks(clicks + upgradeLevel);

    };

    const handleUpgrade = () => {
        if (clicks >= 10) {
            setClicks(clicks - upgradeLevel * 10)
            setUpgradeLevel(upgradeLevel + 1);
        }
    };

    const upgradeDouble = () => {
        if (clicks >= 20) {
            setClicks(clicks - 20)
            setUpgradeLevel(upgradeLevel + 2);
        }
    };

    const upgradeFive = () => {
        if (clicks >= 50) {
            setClicks(clicks - 50)
            setUpgradeLevel(upgradeLevel + 5);
        }
    };

    const upgradeTen = () => {
        if (clicks >= 100) {
            setClicks(clicks - 100)
            setUpgradeLevel(upgradeLevel + 10);
        }
    };


    const openShop = () => {
        if (expanded) {
            setBlockHeight('100px')
            setHiden('none')
        }
        else {
            setBlockHeight('250px')
            setHiden('flex')
        }
        setExpanded(!expanded)


    }

    return (
        <div className="container">

            <div className='App'>
                <h1>Clicker game</h1>

                <div className='score-block'>
                    <p className='score'>Монет: {clicks}$</p>
                </div>

                <div className='upgrade-block'>
                    <h2>Множитель: {upgradeLevel}</h2>
                </div>

                <div className='click_block'>
                    <button onClick={handleClick} className='btn_click'></button>
                </div>


                <div className='shop_block' style={{ height: blockHeigth }}>

                    <h3 className='store'>Store</h3>
                    <button onClick={openShop} className='btn_Shop'></button>

                    <div className='wrapper'>
                        
                        <div className='shop_item_block' style={{ display: hiden }}>

                            <button onClick={handleUpgrade} className='btn_upgrade'></button>
                            <h4 className='item_price'>Стоимость: 10$</h4>
                        </div>

                        <div className='shop_item_block right_block' style={{ display: hiden }}>

                            <button onClick={upgradeDouble} className='btn_upgrade double'></button>
                            <h4 className='item_price'>Стоимость: 20$</h4>
                        </div>

                        <div className='shop_item_block' style={{ display: hiden }}>

                            <button onClick={upgradeFive} className='btn_upgrade five'></button>
                            <h4 className='item_price'>Стоимость: 50$</h4>
                        </div>

                        <div className='shop_item_block right_block' style={{ display: hiden }}>

                            <button onClick={upgradeTen} className='btn_upgrade ten'></button>
                            <h4 className='item_price'>Стоимость: 100$</h4>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clicker;