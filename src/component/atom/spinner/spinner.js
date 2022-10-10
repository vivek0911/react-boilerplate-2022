import PropTypes from 'prop-types'

const Style = {
  svg: {
    background: 'none',
    display: 'block',
    shapeRendering: 'auto',
  },
}

function Spinner({ 'data-test': dataTest, color, size }) {
  return (
    <svg
      data-test={`${dataTest}`}
      preserveAspectRatio="xMidYMid"
      style={Style.svg}
      viewBox="0 0 100 100"
      width={`${size}px`}
    >
      <circle
        cx="84"
        cy="50"
        data-test={`${dataTest}.circle`}
        fill={color}
        r="10"
      >
        <animate
          attributeName="r"
          begin="0s"
          calcMode="spline"
          dur="0.41666666666666663s"
          keySplines="0 0.5 0.5 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="10;0"
        />
        <animate
          attributeName="fill"
          begin="0s"
          calcMode="discrete"
          dur="1.6666666666666665s"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values={`${color};${color};${color};${color};${color}`}
        />
      </circle>

      <circle cx="16" cy="50" fill={color} r="10">
        <animate
          attributeName="r"
          begin="0s"
          calcMode="spline"
          dur="1.6666666666666665s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="0;0;10;10;10"
        />
        <animate
          attributeName="cx"
          begin="0s"
          calcMode="spline"
          dur="1.6666666666666665s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="16;16;16;50;84"
        />
      </circle>

      <circle cx="50" cy="50" fill={color} r="10">
        <animate
          attributeName="r"
          begin="-0.41666666666666663s"
          calcMode="spline"
          dur="1.6666666666666665s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="0;0;10;10;10"
        />
        <animate
          attributeName="cx"
          begin="-0.41666666666666663s"
          calcMode="spline"
          dur="1.6666666666666665s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="16;16;16;50;84"
        />
      </circle>

      <circle cx="84" cy="50" fill={color} r="10">
        <animate
          attributeName="r"
          begin="-0.8333333333333333s"
          calcMode="spline"
          dur="1.6666666666666665s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="0;0;10;10;10"
        />
        <animate
          attributeName="cx"
          begin="-0.8333333333333333s"
          calcMode="spline"
          dur="1.6666666666666665s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="16;16;16;50;84"
        />
      </circle>

      <circle cx="16" cy="50" fill={color} r="10">
        <animate
          attributeName="r"
          begin="-1.2499999999999998s"
          calcMode="spline"
          dur="1.6666666666666665s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="0;0;10;10;10"
        />
        <animate
          attributeName="cx"
          begin="-1.2499999999999998s"
          calcMode="spline"
          dur="1.6666666666666665s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="16;16;16;50;84"
        />
      </circle>
    </svg>
  )
}

Spinner.propTypes = {
  'data-test': PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
}

Spinner.defaultProps = {
  'data-test': 'spinner',
  color: 'var(--color-white)',
  size: 40,
}

export default Spinner
