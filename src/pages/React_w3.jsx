import React, { useState } from 'react';

function Car(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car brand="Ford" />
      <Car brand="BMW" />
    </>
  );
}

function SimpleCar() {
  return <h2>I am a Car!</h2>;
}

function SimpleGarage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <SimpleCar />
    </>
  );
}

function React_w3() {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const menuStyle = (isSelected) => ({
    border: '1px solid gray',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: isSelected ? '#e0f7fa' : 'white'
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2>React_w3</h2>

      <div
        style={menuStyle(selectedMenu === 'compo_1')}
        onClick={() => setSelectedMenu('compo_1')}
      >
        compo_1
      </div>

      <div
        style={menuStyle(selectedMenu === 'compo_2')}
        onClick={() => setSelectedMenu('compo_2')}
      >
        compo_2
      </div>

      <div style={{ marginTop: '20px' }}>
        {selectedMenu === 'compo_1' && <SimpleGarage />}
        {selectedMenu === 'compo_2' && <Garage />}
        {!selectedMenu && <p>메뉴를 선택해 주세요.</p>}
      </div>
    </div>
  );
}

export default React_w3;