import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';
import Footer from './Footer';

function Home() {
    return (
        <div>
            <Banner />

            <div className="home__section">
                <Card src="https://hackernoon.com/hn-images/1*fc8OPL335ItcCJysggIiRQ.png"
                title="Book flights"
                info="Book your flight's to your dreamland in less than 5 minutes!" />
                <Card src="https://ichef.bbci.co.uk/news/555/cpsprodpb/83EF/production/_94257733_thinkstockphotos-499518524.jpg"
                title="Unique Stays"
                info="Dont lose the oportunity yo take a break" />
                <Card  src="https://www.digsdigs.com/photos/small-wooden-house-with-smart-design-and-mountain-views-1-554x830.jpg"
                title="Entire House"
                info="Why you want to rent a room, if you can rent a house!" />
            </div>

            <div className="home__section">
                <Card src="https://www.hotelpannavilas.com/assets/images/rooms/pop-1.jpg"
                title="Room 1"
                info="Good Room with good views"
                price="40€ per Night"/>
                <Card src="https://www.hotelpannavilas.com/assets/images/rooms/pop-2.jpg"
                title="Room 2"
                info="Good Room with good views"
                price="40€ per Night"/>
                <Card src="https://www.hotelpannavilas.com/assets/images/rooms/pop-7.jpg"
                title="Room 3"
                info="Good Room with good views"
                price="40€ per Night"
                 />
            </div>
        </div>
    )
}

export default Home
