import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
  const onClick = () =>{
    console.log('Click')
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'grey' : 'steelblue'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',  /* incase there's no title */
}

Header.propTypes = {
    title: PropTypes.string.isRequired,    /* Makes you code more robust, easily catch errors */
}

export default Header