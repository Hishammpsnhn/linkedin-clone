import React from 'react';
import './Option.css'

function HeaderOption({ icon: IconComponent, title }) {
  return (
    <div className='headerOption'>
      {IconComponent && <IconComponent className='icons' />}
      <a href='/' className='headerOption__title'>{title}</a>
    </div>
  );
}

export default HeaderOption;    
