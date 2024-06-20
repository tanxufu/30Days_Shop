import Footer from '../components/Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <div className="main">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
