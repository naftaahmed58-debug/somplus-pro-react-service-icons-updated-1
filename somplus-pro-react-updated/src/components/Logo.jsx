import logo from '../assets/somplus-logo.jpg';

export default function Logo({ compact = false }) {
  return (
    <div className="logo-mark" aria-label="SomPlus Digital">
      <img src={logo} alt="SomPlus Digital logo" />
      {!compact && (
        <div>
          <strong>
            SOM<span>PLUS</span>
          </strong>
          <small>Grow • Engage • Succeed</small>
        </div>
      )}
    </div>
  );
}
