import styles from "./LeftSide.module.scss"
import SearchIcon from "@material-ui/icons/Search"
import Avatar from "@material-ui/core/Avatar"
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import MessageIcon from "@material-ui/icons/Message"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"

const LeftSide = () => {
  return (
    <>
      <header className={styles.header}>
        <Avatar className={styles.avatar} />
        <div className={styles.rightHeader}>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <MessageIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </header>
      <div className={styles.searchForm}>
        <div className={styles.searchInput}>
          <IconButton
            type="submit"
            className={styles.iconButton}
            aria-label="search"
          >
            <SearchIcon className={styles.searchIcon} />
          </IconButton>
          <InputBase
            className={styles.input}
            placeholder="Cari atau mulai chat baru"
            inputProps={{ "aria-label": "Cari atau mulai chat baru" }}
          />
        </div>
      </div>
      {/* ContactList */}
    </>
  )
}

export default LeftSide
