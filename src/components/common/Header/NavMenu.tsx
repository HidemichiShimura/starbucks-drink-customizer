import { FC } from 'react'
import { NavContent } from '../../index'
import styles from 'styles/common/Header/NavMenu.module.scss'

const NavMenu: FC = () => (
  <ul className={styles['nav-menu-container']}>
    <NavContent />
  </ul>
)

export default NavMenu
