import React,{useState ,useEffect} from 'react'
import { Helmet } from 'react-helmet'
import Header from './Header'
import carInfo from './carInfo'
import { useParams } from 'react-router-dom'

const ModelPage = () => {
   const [Model, setModel] = useState([]) 
   const {title} = useParams()
   const carTitle = title
   useEffect (()=>{
    const response = carInfo.filter((item)=>item.title === carTitle)[0]
    setModel(response)
  },[])
  console.log(Model)
  return (
    <div>
    <Header/>
    <Helmet>
        <title>Model Page</title>
    </Helmet>
    <div>
      {Model.title}
    </div>
    </div>
  )
}

export default ModelPage