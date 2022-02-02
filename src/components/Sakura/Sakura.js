import React from 'react';

import leaf1 from '../../assets/leaf/leaf1.png';
import leaf2 from '../../assets/leaf/leaf2.png';
import leaf3 from '../../assets/leaf/leaf3.png';
import leaf4 from '../../assets/leaf/leaf4.png';

import '../../App.css';

const Sakura = () => (
    <div>
        <div className="set">
            <div><img src={leaf1} /></div>
            <div><img src={leaf2} /></div>
            <div><img src={leaf3} /></div>
            <div><img src={leaf4} /></div>
            <div><img src={leaf1} /></div>
            <div><img src={leaf2} /></div>
            <div><img src={leaf3} /></div>
            <div><img src={leaf4} /></div>
        </div>

        <div className="set set2">
            <div><img src={leaf1} /></div>
            <div><img src={leaf2} /></div>
            <div><img src={leaf3} /></div>
            <div><img src={leaf4} /></div>
            <div><img src={leaf1} /></div>
            <div><img src={leaf2} /></div>
            <div><img src={leaf3} /></div>
            <div><img src={leaf4} /></div>
        </div>

        <div className="set set3">
            <div><img src={leaf1} /></div>
            <div><img src={leaf2} /></div>
            <div><img src={leaf3} /></div>
            <div><img src={leaf4} /></div>
            <div><img src={leaf1} /></div>
            <div><img src={leaf2} /></div>
            <div><img src={leaf3} /></div>
            <div><img src={leaf4} /></div>
        </div>
    </div>
)

export default Sakura;