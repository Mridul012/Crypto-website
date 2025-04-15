import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import './test.css';

function UsersTrust() {
  const base = 5784;
  const [userCount, setUserCount] = useState(base);

  useEffect(() => {
    const randomVariation = Math.floor(Math.random() * 100)-50;
    setUserCount(base + randomVariation);
  }, []);

  return (
    <div className="users-trust-section">
      <h2 className="counter">
        <CountUp
          end={userCount}
          duration={4}
          separator=","
        />
      </h2>
      <p className="label">USERS</p>
      <p className="sub-label">TRUST US</p>
    </div>
  );
}

export default UsersTrust;
