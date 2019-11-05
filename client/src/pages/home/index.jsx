import React, { useState } from 'react'
import { inject } from 'mobx-react'
import './index.scss'
const Home = () => {
    const [obj, setObj] = useState({
        name: 'ygy'
    })
    console.log('render')
    return (
        <div className="home" onClick={() => setObj({name: '777'})}>{obj.name}</div>
    )
}

const mapStoreToProps = ({ store }) => {
    return {
        switch: store.home.switch,
        changeSwitch: store.home.changeSwitch
    }
}
export default inject(mapStoreToProps)(Home);