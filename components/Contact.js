import { Avatar } from "@material-ui/core"
import styles from "./Contact.module.scss"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

const Contact = ({ name, message, time }) => {
	return (
		<div className={styles.contact}>
			<div className={styles.avatarBox}>
				<Avatar className={styles.avatar} />
			</div>

			<div className={styles.chatInfo}>
				<div className={styles.contactName}>{name}</div>
				<div className={styles.contactMessage}>{message}</div>
			</div>

			<div className={styles.timeStampBox}>
				<div className={styles.timeStamp}>{time}</div>
				<div className={styles.icon}>
					<ExpandMoreIcon />
				</div>
			</div>
		</div>
	)
}

export default Contact
