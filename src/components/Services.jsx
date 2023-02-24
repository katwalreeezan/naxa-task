import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions';
import './Services.css';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-scroll';

const Services = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const data = useSelector((state) => state.servicesData.data);
  console.log(data);

  if (data.loading) {
    return <p>Loading...</p>;
  }

  if (data.error) {
    return <p>Error: {data.error}</p>;
  }
  return (
    <div>
      <h2> Our Services</h2>
      <div className='title'>
        {data.map((title) => (
          <Link to={title.id} smooth={true} duration={500} key={title.id}>
            <h3>{title.title}</h3>
          </Link>
        ))}
      </div>
      {data.map((service) => (
        <div key={service.id} className='maincard' id={service.id}>
          <div className='card'>
            <img src={service.photo} alt='pic' />
            <h3>{service.title}</h3>
            <div className='card-body'>
              <p>{ReactHtmlParser(service.description1)}</p>
            </div>
            <div className='card-bodytwo'>
              <p>{ReactHtmlParser(service.description2)} </p>
            </div>
          </div>
          <img src={service.icon} alt='icon' className='icon' />
        </div>
            ))}
            </div>
          );
        };
        
        export default Services;
