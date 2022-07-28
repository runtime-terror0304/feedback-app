import PropTypes from 'prop-types';

function Card({children, reverse}) {
  return (
    // this is the example of conditional class
    // <div className={`card ${reverse && 'reverse'}`}>
    //     {children}
    // </div>

    // this is the example of conditional styling.
    <div className="card" style={{
        backgroundColor: reverse ? 'rgb(0,0,0,0.4)' : '#fff',
        color: reverse ? '#fff': '#000'
    }}>
        {children}
    </div>
  )
}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    reverse: PropTypes.bool,
    children: PropTypes.node.isRequired
}

export default Card