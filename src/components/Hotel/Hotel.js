import React from 'react';
import PropTypes from 'prop-types';
import HotelHeader from './HotelHeader';
import HotelContent from './HotelContent';
import HotelFooter from './HotelFooter';

const Hotel = (props) => {
  const { data } = props;
  return (
    <div className="card">
      <HotelHeader source={data.photo} AltText={data.name} />
      <HotelContent
        name={data.name}
        description={data.description}
        city={data.city}
        country={data.country}
        rooms={data.rooms}
        price={data.price}
      />
      <HotelFooter />
    </div>
  );
};

Hotel.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Hotel;
