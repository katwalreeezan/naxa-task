import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { fetchData } from '../redux/actions';
import './Services.css'

const Services = () => {
  
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch])
  const data=useSelector((state)=>state.servicesData.data)
  console.log(data)

  if (data.loading) {
    return <p>Loading...</p>;
  }

  if (data.error) {
    return <p>Error: {data.error}</p>;
  }
  

  return (<div>
     <h2> Our Services</h2>
     <div className='title'>
     {data.map((title)=><h3>{title.title}</h3>)}
     </div>
      {data.map((service) => (
          <div key={service.id} className='maincard'>
            <div className='card'>
            <img src={service.photo} alt='pic'/>
            <h3>{service.title}</h3>
            <div className='card-body'>
            <p align ='justify'>{service.description1}</p>
            </div>
            <div className='card-bodytwo'>
            <p>{service.description2} </p>
            </div>
            </div>
            <img src={service.icon} alt='icon' className='icon'/>
            </div>
        ))}
    </div>
 );
};
export default Services
