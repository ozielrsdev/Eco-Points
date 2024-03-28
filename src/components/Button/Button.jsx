import PropTypes from 'prop-types'
export default function Button(props){
  return(
  <button className={props.className}>{props.title}</button>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}