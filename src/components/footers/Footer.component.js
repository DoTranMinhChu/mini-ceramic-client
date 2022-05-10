import logo from '../../assets/images/logo.png';
import '../../styles/scss/footer.style.scss'
function Footer() {
    return (
        <>
            <footer className="footer-wrapper">
                <div className="footer-body">
                    <div className="footer-body__elements flex-col-center">
                        <div className="footer-body__logo-wrapper">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="footer-body__descriptions">
                            Mini Ceramic is just a demo product not a real e-commerce site, all the above deals and items are not real
                        </div>
                    </div>
                    <div className="footer-body__elements flex-col">
                        <div className="footer-body__infomation">
                            <h1 className="footer-body__infomation-title">Author</h1>
                            <p className="footer-body__infomation-content">Do Tran Minh Chu</p>
                        </div>
                        <div className="footer-body__infomation">
                            <h1 className="footer-body__infomation-title">Email</h1>
                            <p className="footer-body__infomation-content">dotranminhchu@gmail.com</p>
                        </div>
                        <div className="footer-body__infomation">
                            <h1 className="footer-body__infomation-title">Github</h1>
                            <a href="https://github.com/DoTranMinhChu" rel="noopener noreferrer" target="_blank" className="footer-body__infomation-content">github.com/DoTranMinhChu</a>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer;