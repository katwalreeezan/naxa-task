import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import { fetchData } from '../redux/actions';
import './Services.css'

const Services = ({ data, loading, error, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  

  return (<div>
     <h2> Our Services</h2>
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

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Services);