import styles from './ChatContainer.module.scss'
import LeftSide from './LeftSide'

const ChatContainer = () => {
  return (
		<>
			<div className={styles.container}>
				<div className={styles.left}>
					<LeftSide />
				</div>
				<div className={styles.right}></div>
			</div>
		</>
	)
}

export default ChatContainer
