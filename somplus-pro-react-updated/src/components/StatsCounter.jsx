import useCountUp from '../hooks/useCountUp.js';

export default function StatsCounter({ item }) {
  const { ref, value } = useCountUp(item.value);

  return (
    <div ref={ref} className="stat-card glass-card">
      <strong>
        {value}
        {item.suffix}
      </strong>
      <span>{item.label}</span>
    </div>
  );
}
