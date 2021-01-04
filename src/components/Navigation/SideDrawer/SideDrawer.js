import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Aux from '../../../hoc/Aux/Aux'
import BackDrop from '../../UI/BackDrop/BackDrop'

import './SideDrawer.css'

const SideDrawer = (props) => {

	return (
		<Aux>
      		<BackDrop show={props.open} clicked={props.closed} />
			<div className={`SideDrawer ${props.open ? 'Open' : 'Close'}`}>
				<Logo height="10%" />
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
	)
}

export default SideDrawer;
