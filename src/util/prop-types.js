import PropTypes from 'prop-types'

export const childProp = PropTypes.oneOfType([
  PropTypes.element,
  PropTypes.node,
])

export const childrenProp = PropTypes.oneOfType([
  PropTypes.element,
  PropTypes.node,
  PropTypes.arrayOf(childProp),
])
