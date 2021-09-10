import Link from 'next/link'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'



const Navbar = () => {
    return(
        <nav>
            <header className="container bottom-6">
                <div className="columns">
                <div className="column">
                    <div className="navbar">
                    <div className="navbar-section">
                        <h4>Navbar</h4>
                    </div>
                    <div className="navbar-section">
                        <h4>
                        <span className="h4-normal">
                            ~ / 
                            <Link href="/">
                            <a title="Home"> Home </a>
                            </Link>
                            
                        </span>
                        </h4>
                    </div>
                    </div>
                </div>
                </div>
            </header>
        </nav>
    );
}

export default Navbar;