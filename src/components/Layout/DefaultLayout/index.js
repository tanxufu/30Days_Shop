import Header from './Header';
import Footer from '../components/Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="main">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
