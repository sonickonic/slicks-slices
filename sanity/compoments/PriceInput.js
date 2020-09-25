import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function createPatchForm(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

const fromatMoney = Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
}).format;

const PriceInput = ({ type, value, onChange, inputComponent }) => (
  <div>
    <h2>
      {type.title} - {value ? fromatMoney(value / 100) : ''}
    </h2>
    <p>{type.description}</p>
    <input
      type={type.name}
      value={value}
      onChange={(e) => onChange(createPatchForm(e.target.value))}
      ref={inputComponent}
    />
  </div>
);

export default PriceInput;

PriceInput.focus = function () {
  this._inputElement.focus();
};
