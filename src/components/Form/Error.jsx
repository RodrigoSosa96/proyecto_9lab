import { Field } from 'react-final-form';
import { Icon } from '@iconify/react';



const Error = ({ name, asyncValidation }) => (
  <Field
    name={name}
    subscription={{ touched: true, error: true, ...(asyncValidation && { validating: true, active: true }) }}
    render={({ meta: { touched, error, validating, active } }) => (
      <label className="label">
        {
          touched && error
            ? <span className='label-text-alt italic text-red-600'>{error}</span>
            : <span className='label-text-alt italic '>Completar campo</span>
        }
        {

        }

        {
          asyncValidation ?
            <span className='label-text-alt italic flex items-center gap-4'>
              {asyncValidation}
              {validating && active && <Icon icon="line-md:loading-loop" />}
            </span>
            : null
        }

      </label>
    )}
  />
)



export default Error