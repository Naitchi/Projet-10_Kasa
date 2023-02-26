import './banner.css';

export default function Banner({ image, children }) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(./img/${image})`,
      }}
    >
      <p>{children}</p>
    </div>
  );
}
