// REACT DEFAULTS
import { PropTypes } from 'prop-types'

// STYLES
import styles from './Container.module.scss'

function Container({ children }) {
  return <div className={styles.container}>{children}</div>
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default Container
