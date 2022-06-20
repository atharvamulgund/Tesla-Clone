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
        leftbtn="Custom"
        rightbtn="Existing inventory"
        />
        <Section 
        title="Model-x"
        description="Order Online for Touchless Delivery"
        image="../images/model-x.jpg"
        alt="model-x"
        leftbtn="Custom"
        rightbtn="Existing inventory"
        />
        <Section 
        title="Model-y"
        description="Order Online for Touchless Delivery"
        image="../images/model-y.jpg"
        alt="model-y"
        leftbtn="Custom"
        rightbtn="Existing inventory"
        />
        <Section 
        title="Model-3"
        description="Order Online for Touchless Delivery"
        image="../images/model-3.jpg"
        alt="model-3"
        leftbtn="Custom"
        rightbtn="Existing inventory"
        />
        <Section 
        title="Solar Panels"
        description="Order Online for Touchless Delivery"
        image="../images/solar-panel.jpg"
        alt="solar-panel"
        leftbtn="Custom"
        rightbtn="Existing inventory"
        />
        <Section 
        title="Solar Roof"
        description="Order Online for Touchless Delivery"
        image="../images/solar-roof.jpg"
        alt="Solar Roof"
        leftbtn="Custom"
        rightbtn="Existing inventory"
        />
    </div>
  )
}

export default Home