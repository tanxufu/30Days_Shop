import Footer from '../components/Footer';

function HasFooterLayout({ children }) {
    return (
        <div>
            <div className="main">{children}</div>
            <Footer />
        </div>
    );
}

export default HasFooterLayout;
