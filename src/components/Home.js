import React from 'react'
import Section from './Section.js'

const Home = () => {
  return (
    <div className="home-container height-screen ">
        <Section 
        title="Model-s"
        description="Order Online for Touchless Delivery"
        image="https://tesla-cdn.thron.com/delivery/public/image/tesla/538ac149-d103-4834-9d38-641d8ae447ef/bvlatuR/std/4096x2560/Homepage-Model-S-Desktop-LHD"
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
        image="https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70"
        alt="model-y"
        leftbtn="Custom"
        rightbtn="Existing inventory"
        />
        <Section 
        title="Model-3"
        description="Order Online for Touchless Delivery"
        image="https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD"
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