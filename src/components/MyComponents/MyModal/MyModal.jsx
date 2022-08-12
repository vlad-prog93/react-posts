import React from "react"
import classes from './MyModal.module.css'

const MyModal = ({ children, visible, setVisible }) => {
  const clModal = visible ? [classes.MyModal, classes.MyModalActive] : [classes.MyModal]
  return (
    <div className={clModal.join(' ')} onClick={() => setVisible(false)}>
      <div className={classes.MyModalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default MyModal