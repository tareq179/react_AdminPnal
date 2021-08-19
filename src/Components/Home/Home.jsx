import React from 'react';
import Chart from '../Chart/Chart';
import FeaturedInfo from '../FeaturedInfo/FeaturedInfo';
import './Home.css';
import {userData} from '../../dummyData';
import WidgetSm from '../WidgetSm/WidgetSm';
import WidgetLg from '../WidgetLg/WidgetLg';

function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}

export default Home
