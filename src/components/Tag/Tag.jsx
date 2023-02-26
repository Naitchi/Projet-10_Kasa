import './tag.css';

export default function Tag({ children }) {
  return (
    <div className="tag">
      <p>{children}</p>
    </div>
  );
}
