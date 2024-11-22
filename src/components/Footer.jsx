
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-base-100 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;