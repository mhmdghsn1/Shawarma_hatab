import React from 'react';
import './Location.css';
import NearMeIcon from '@mui/icons-material/NearMe';

function Location() {
  return (
    <div className='location-main'>
      <nav role="navigation">
        <div className="navbar-expand-md">
          <div className='location-text'>
            <h5>
              Airport Road . After Al Amana station, towards Al Rasoul Hospital. Near Nisreen Pharmacy and Hazma stores: Shawarma Hatab.
            </h5>
            <NearMeIcon className="nearme-icon" />
            <h5>
              طريق المطار ، بعد محطة الأمانة بإتجاه مستشفى الرسول الأعظم . قرب صيدلية نسرين و محلات هزيمة : شاورما على حطب
            </h5>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Location;