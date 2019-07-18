import React from 'react';
import connectField from 'uniforms/connectField';
import schema from './CycleFieldSchema';
import { AutoForm, SubmitField } from '../../universal';

// This field works as follows: iterate all allowed values and optionally no-value
// state if the field is not required. This one uses Semantic-UI.
const Cycle = ({ allowedValues, label, required, value, onChange }) => (
  <a
    onClick={() =>
      onChange(
        value
          ? allowedValues.indexOf(value) === allowedValues.length - 1
            ? required
              ? allowedValues[0]
              : null
            : allowedValues[allowedValues.indexOf(value) + 1]
          : allowedValues[0]
      )
    }
  >
    {value || label}
  </a>
);

const CycleField = connectField(Cycle);

export default function ExamplesCycleField() {
  return (
    <AutoForm schema={schema}>
      <CycleField name="cycle" allowedValues={['One', 'Two', 'Three']} />
      <SubmitField />
    </AutoForm>
  );
}