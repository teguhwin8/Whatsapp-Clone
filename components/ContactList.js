import Contact from "./Contact"
import styles from "./ContactList.module.scss"

const ContactList = () => {
	return (
		<div className={styles.container}>
			<Contact
				name="Teguh Widodo"
				message="Pembelian AIGO1H5.083867297505 Hrg=7850 berhasil, Seri Voucher: 9161-5009-6329-9330. Saldo Rp.1176 TRANSAKSI SDH NORMAL KEMBALI"
				time="Kemarin"
			/>
		</div>
	)
}

export default ContactList
