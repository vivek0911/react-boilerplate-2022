import classNames from 'classnames'
import PropTypes from 'prop-types'

import { childrenProp } from '@util/prop-types'

import Spinner from '@atom/spinner'

export const ButtonVariant = {
  Default: 'bg-blue-dark',
  Teal: 'bg-teal',
  Orange: 'bg-orange',
  BlueDark: 'bg-blue-dark',
}

export const ButtonKind = {
  Default: 'default',
  Flat: 'flat',
}

export const SpinnerColor = {
  [ButtonVariant.Default]: 'var(--color-white)',
  [ButtonVariant.Teal]: 'var(--color-white)',
  [ButtonVariant.Orange]: 'var(--color-white)',
  [ButtonVariant.BlueDark]: 'var(--color-white)',
}

function Button({
  'data-test': dataTest,
  children,
  className,
  disabled,
  isLoading,
  kind,
  variant,
  ...props
}) {
  return (
    <button
      {...props}
      className={classNames([
        'flex justify-center items-center box-border w-full p-4 h-13 max-h-13 border-0 text-white-light rounded transition ease-in-out delay-200 cursor-pointer outline-none hover:opacity-80 disabled:opacity-75',
        variant,
        kind,
        className,
      ])}
      data-test={`${dataTest}.button`}
      disabled={disabled}
      style={{ pointerEvents: disabled ? 'none' : 'initial' }}
    >
      {isLoading ? (
        <Spinner
          color={
            disabled
              ? SpinnerColor[ButtonVariant.Default]
              : SpinnerColor[variant]
          }
          data-test={`${dataTest}.spinner`}
        />
      ) : (
        children && (
          <span
            className="text-base font-medium leading-5"
            data-test={`${dataTest}.children`}
          >
            {children}
          </span>
        )
      )}
    </button>
  )
}

Button.propTypes = {
  'data-test': PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  kind: PropTypes.oneOf(Object.values(ButtonKind)),
  variant: PropTypes.oneOf(Object.values(ButtonVariant)),
  children: childrenProp,
}

Button.defaultProps = {
  'data-test': 'button',
  children: null,
  className: undefined,
  disabled: false,
  isLoading: false,
  kind: ButtonKind.Default,
  variant: ButtonVariant.Default,
}

export default Button
