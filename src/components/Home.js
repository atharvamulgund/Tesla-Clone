import React from 'react'
import Section from './Section.js'

const Home = () => {
  return (
    <div className="home-container height-screen ">
        <Section 
        title="Model-s"
        description="Order Online for Touchless Delivery"
        image="../images/model-s.jpg"
        alt="model-s"
        />
        <Section 
        title="Model-x"
        description="Order Online for Touchless Delivery"
        image="../images/model-x.jpg"
        alt="model-x"
        />
        <Section 
        title="Model-y"
        description="Order Online for Touchless Delivery"
        image="../images/model-y.jpg"
        alt="model-y"
        />
        <Section 
        title="Model-3"
        description="Order Online for Touchless Delivery"
        image="../images/model-3.jpg"
        alt="model-3"
        />
        <Section 
        title="Solar Panels"
        description="Order Online for Touchless Delivery"
        image="../images/solar-panel.jpg"
        alt="solar-panel"
        />
        <Section 
        title="Solar Roof"
        description="Order Online for Touchless Delivery"
        image="../images/solar-roof.jpg"
        alt="Solar Roof"
        />
    </div>
  )
}

export default Home