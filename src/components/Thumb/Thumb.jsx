import './thumb.css';

export default function Thumb(props) {
  return (
    <a className="link" href={`/logement/${props.item.id}`}>
      <div
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${props.item.cover})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className="thumb"
      >
        <h2>{props.item.title}</h2>
      </div>
    </a>
  );
}
