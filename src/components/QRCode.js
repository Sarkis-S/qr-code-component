
import qrcode from '../images/image-qr-code.png';

export default function QRCode () {
  return (
    <div className='qr-container'>
      <div className='qr-items'>
        <img className='qr-box' src={qrcode} alt='qr code'/>
        <div className='text-container'>
        <h2>Improve your front-end skills by building projects</h2>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
  );
}
