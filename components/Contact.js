import { Avatar } from "@material-ui/core"
import styles from "./Contact.module.scss"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Contact = () => {
	return (
		<div className={styles.contact}>
      {/* 1 */}
			<div className={styles.avatarBox}>
				<Avatar className={styles.avatar} />
			</div>

      {/* 2 */}
			<div className={styles.chatInfo}>
				<div className={styles.contactName}>Firlian Syaroni</div>
				<div className={styles.contactMessage}>Pembelian AIGO1H5.083867297505 Hrg=7850 berhasil, Seri Voucher: 9161-5009-6329-9330. Saldo Rp.1176 TRANSAKSI SDH NORMAL KEMBALI</div>
			</div>

      {/* 3 */}
      <div className={styles.timeStampBox}>
        <div className={styles.timeStamp}>Kemarin</div>
        <div className={styles.icon}>
          <ExpandMoreIcon />
        </div>
      </div>
		</div>
	)
}

export default Contact
