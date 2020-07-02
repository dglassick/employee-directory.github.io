import React from 'react';
import faker from 'faker';

const EmployeeCard = props => {
  return (
    <div className='teal card'>
      <div className='content'>
        <img
          alt='employee'
          className='right floated mini ui image'
          src={props.thumbnail}
        />
        <div className='header'>{props.name}</div>
        <div>
          <span>{props.location}</span>
        </div>

        <div>
          <span>
            <i className='icon-envelope'></i> {props.email}
          </span>

          <br></br>

          <span>
            <i className='phone icon'></i> {props.phone}
          </span>
        </div>
      </div>

      <div className='ui inverted grey segment'>
        <button
          className='ui inverted primary button'
          onClick={() => {
            props.setEmployee({
              name: props.name,
              location: props.location,
              image: props.image,
              email: props.email,
              phone: props.phone,
              department: faker.commerce.department(),
              finance: faker.finance.amount(),
              title: faker.name.jobTitle()
            });
            props.handleOpen();
          }}
        >
          Employee Info
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
