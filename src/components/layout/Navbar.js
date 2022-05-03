import Link from 'next/link'
import Image from 'next/image'

import styles from "../../../styles/layout/Navbar.module.scss"

import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
const Navbar = ({}) => {

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_container}>
                <Link href="/" passHref={true} styles={{}}>
                    <div className={styles.navbar_logo}>
                        <Image className={styles.navbar_logo_img} src='/vercel.svg' alt='Site Logo' priority={false} layout="fill" objectFit='contain' width={283} height={64}/>
                    </div>
                </Link>

                <div className={styles.page_menu_full_container}>
                    <div className={styles.menu_button_container} >
                        <MenuRoundedIcon className={styles.hamburger_button} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;