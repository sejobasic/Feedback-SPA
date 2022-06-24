import React from 'react'
import PropTypes from 'prop-types'
import useSound from 'use-sound';
import boop2 from '../assets/boop3.wav'

function Button({ children, version, type, isDisabled }) {
  const [addSound] =  useSound(boop2, { volume: 0.3 });

  return (
    <button 
      type={type} 
      disabled={isDisabled} 
      className={`btn btn-${version}`}
      onClick={addSound}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: 'false'
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
}

export default Button