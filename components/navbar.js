import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Derek '

const Navbar = () => {
    const router = useRouter()
    return(
        <header className={utilStyles["container"] + " " + utilStyles["bottom-6"]}>
            <div className={utilStyles["columns"]}>
                <div className={utilStyles["column"]}>
                    <div className="navbar">
                        <div className="navbar-section">
                            
                            <header className={styles.header}>
                            {router.pathname =='/' ? (
                            <>
                                <h2 className={utilStyles.headingLg}>{name}</h2>
                            </>
                            ) : (
                            <>
                                <h2 className={utilStyles.headingLg}>
                                <Link href="/">
                                    <a className={utilStyles.colorInherit}>{name}</a>
                                </Link>
                                </h2>
                            </>
                            )}
                            </header>
                        </div>
                    
                    <div className="navbar-section">
                        <h4>
                        <span className="h4-normal">
                            ~ / 
                            <Link href="/">
                            <a title="Home"> Home </a>
                            </Link>
                            {router.pathname =='/' ? (
                                <>
                                    
                                </>
                            ) : (
                                <>
                                    {router.asPath}
                                </>
                            )} 
                        </span>
                        </h4>
                    </div>
                    </div>
                </div>
            </div>
        </header>
        
    );
}

export default Navbar;


