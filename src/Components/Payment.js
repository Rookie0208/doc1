import React from 'react'
import './style2.css';
import qrCode from './qrCode.png'

const Payment = () => {
    return (
        <div className="outer-container">
            <div className="inner-container">
                <div className="upper-section">
                    <h1>Select Your Plan !!</h1>
                    <div className="upper-section-container">
                        <div className="cards-option">
                            <button className="card1">Credit Card</button>
                            <button className="card2">Debit Card</button>
                            <button className="card3">Internet Banking</button>
                        </div>
                        <div className="qr">
                            {/* <div className="qr-box">This will be the QR</div> */}
                            <img src={qrCode} alt="qr code"/>
                            <button id='generate'>Generate QR</button>
                        </div>
                    </div>
                </div>
                <div className="lower-section">
                    <div className="plan-container">
                        <div className="plan1 plans">Plan 1</div>
                        <div className="plan2 plans">Plan 2</div>
                        <div className="plan3 plans">Plan 3</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;