import { useRouter } from 'next/router'


const Footer = () => {
    const router = useRouter()

    return(
        <footer className="top-8">
            {router.pathname =='/' ? (
                <>
                </>
                ) : (
                <>
                    <small>
                         © Copyright 2021-22, Derek.
                    </small>
                </>
                )}
        </footer>
    );
}

export default Footer;