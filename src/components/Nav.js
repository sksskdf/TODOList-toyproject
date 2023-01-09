import React from "react";
import {
	NovuProvider,
	PopoverNotificationCenter,
	NotificationBell,
} from "@novu/notification-center";
import { useNavigate } from "react-router-dom";

const Nav = () => {
	const navigate = useNavigate();

	const onNotificationClick = (notification) =>
		navigate(notification.cta.data.url);
	return (
		<nav className='navbar'>
			<h3>Team's todo list</h3>
			<div>
				<NovuProvider
					subscriberId='63bbebea90da64720421ae5a'
					applicationIdentifier='K6Dvfpx2n6-a'
				>
					<PopoverNotificationCenter
						onNotificationClick={onNotificationClick}
						colorScheme='light'
					>
						{({ unseenCount }) => (
							<NotificationBell unseenCount={unseenCount} />
						)}
					</PopoverNotificationCenter>
				</NovuProvider>
			</div>
		</nav>
	);
};

export default Nav;