export function Footer() {
    return (<footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <div className="email">
                        <p className="email-text">Залиште свій емейл для запитань:</p>
                        <input className="email-input" type="email" name="email" placeholder="Ваша електронна пошта"
                               required/>
                        <button className="btn" type="submit">Надіслати</button>
                    </div>
                </div>
            </div>
            <p className="footer-text">&copy; 2023 Сервіс організації подій Pulse.com. Усі права захищені.</p>
        </footer>
    )

}

export default Footer;
