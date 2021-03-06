import React from 'react';
import PropTypes from 'prop-types';

const HotelTags = ({ city, country, rooms, price }) => {
  return (
    <div
      className="field is-grouped is-grouped-multiline"
      style={{ marginTop: '1em' }}
    >
      <div className="control">
        <div className="tags has-addons">
          <span className="tag is-medium is-info">
            <i className="fas fa-map-marker" />
          </span>
          <span className="tag is-medium">{`${city}, ${country}`}</span>
        </div>
      </div>
      <div className="control">
        <div className="tags has-addons">
          <span className="tag is-medium is-info">
            <i className="fas fa-bed" />
          </span>
          <span className="tag is-medium">{`${rooms} Habitaciones`}</span>
        </div>
      </div>
      <div className="control">
        <div className="tags">
          <span className="tag is-medium is-info">
            {[1, 2, 3, 4].map((value) => (
              <i
                key={value}
                className="fas fa-dollar-sign"
                style={{
                  margin: '0 .125em',
                  opacity: value > price ? '.25' : '1',
                }}
              />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

HotelTags.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  rooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default HotelTags;
