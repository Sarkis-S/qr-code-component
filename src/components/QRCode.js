import qrcode from '../images/image-qr-code.png';

export default function QRCode () {
  return (
    <main className='qr-container'>
      <figure className='qr-items'>
        <img className='qr-code' src={qrcode} alt='qr code for scanning'/>
        <div className='text-container'>
          <figcaption>
            <h2>Improve your front-end skills by building projects</h2>
          </figcaption>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </figure>
    </main>
  );
}
