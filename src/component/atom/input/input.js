import PropTypes from 'prop-types'

function Input({ label, error, register, 'data-test': dataTest, ...props }) {
  const id = props['name']
  return (
    <div className="w-full pt-3" data-test={`${dataTest}.container`}>
      {label && (
        <label className="text-black font-medium leading-5" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        {...props}
        className="box-border p-4 h-12 w-full outline-none bg-white rounded border border-solid border-gray-light"
        id={id}
        {...register(id)}
      />
      <div className="h-6 text-orange text-xs" data-test={`${dataTest}.error`}>
        {error}
      </div>
    </div>
  )
}

Input.propTypes = {
  'data-test': PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.string,
  register: PropTypes.func,
}

Input.defaultProps = {
  'data-test': 'input',
  label: '',
  name: '',
  error: '',
  register: () => {},
}

export default Input
