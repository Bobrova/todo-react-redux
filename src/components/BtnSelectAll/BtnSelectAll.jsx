import React from 'react';
import './style.css';

function BtnSelectAll(data) {
  const { isAllChecked, selectedItem } = data;
  const classActive = isAllChecked ? 'active' : '';
  return (
    <div className={`checked-items ${classActive}`} onClick={selectedItem}>
      {String.fromCharCode(709)}
    </div>
  );
}

export default BtnSelectAll;
