import React from 'react';
import './Option.css'

function HeaderOption({ icon: IconComponent, title }) {
  return (
    <div className='headerOption'>
      {IconComponent && <IconComponent className='icons' />}
      <h3 className='headerOption__title'>{title}</h3>
    </div>
  );
}

export default HeaderOption;    
