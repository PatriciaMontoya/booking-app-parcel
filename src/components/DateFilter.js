import React from 'react';

const DateFilter = ({ date, icon }) => {
  const iconText = `fas ${icon}`;

  return (
    <div className="field">
      <div className="control has-icons-left">
        <input className="input" type="date" />
        <span className="icon is-small is-left">
          <i className={iconText}></i>
        </span>
      </div>
    </div>
  );
};

export default DateFilter;
