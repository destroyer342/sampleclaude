function Hair({ style, color }) {
  const top = <path d="M17 20 Q16 6 30 6 Q44 6 43 20 Q40 12 30 12 Q20 12 17 20Z" fill={color} />;

  switch (style) {
    case 'curly':
      return (
        <g fill={color}>
          {[[18, 13], [22, 8.5], [28, 6.5], [34, 7], [39, 9.5], [42, 14]].map(([cx, cy]) => (
            <circle key={cx} cx={cx} cy={cy} r="5" />
          ))}
        </g>
      );
    case 'long':
      return (
        <g fill={color}>
          {top}
          <rect x="14.5" y="14" width="5.5" height="22" rx="2.75" />
          <rect x="40" y="14" width="5.5" height="22" rx="2.75" />
        </g>
      );
    case 'bun':
      return (
        <g fill={color}>
          <circle cx="30" cy="4.5" r="5" />
          {top}
        </g>
      );
    default:
      return top;
  }
}

function Accessory({ type }) {
  switch (type) {
    case 'glasses':
      return (
        <g fill="rgba(255,255,255,0.25)" stroke="#1f2937" strokeWidth="1.3">
          <circle cx="25" cy="21" r="3.8" />
          <circle cx="35" cy="21" r="3.8" />
          <path d="M28.8 21h2.4" />
        </g>
      );
    case 'headset':
      return (
        <g stroke="#334155" fill="none">
          <path d="M16 20 Q16 4 30 4 Q44 4 44 20" strokeWidth="2.5" />
          <path d="M15 25 Q16 30 24 29" strokeWidth="1.6" />
          <rect x="13" y="16" width="5" height="9" rx="2" fill="#334155" />
          <rect x="42" y="16" width="5" height="9" rx="2" fill="#334155" />
        </g>
      );
    case 'headphones':
      return (
        <g>
          <path d="M16 20 Q16 4 30 4 Q44 4 44 20" stroke="#ef4444" strokeWidth="3" fill="none" />
          <rect x="12" y="15" width="6" height="10" rx="2.5" fill="#ef4444" />
          <rect x="42" y="15" width="6" height="10" rx="2.5" fill="#ef4444" />
        </g>
      );
    default:
      return null;
  }
}

export default function Person({ look, walking, working, celebrate, className = '' }) {
  const { skin, hair, hairStyle, shirt, pants, accessory } = look;
  const classes = ['person', className, walking && 'walking', working && 'working', celebrate && 'celebrate']
    .filter(Boolean)
    .join(' ');

  return (
    <svg className={classes} viewBox="0 0 60 90" aria-hidden="true">
      <g className="leg leg-l">
        <rect x="22" y="62" width="7" height="24" rx="3" fill={pants} />
        <rect x="20" y="83" width="10" height="5" rx="2.5" fill="#1f2937" />
      </g>
      <g className="leg leg-r">
        <rect x="31" y="62" width="7" height="24" rx="3" fill={pants} />
        <rect x="30" y="83" width="10" height="5" rx="2.5" fill="#1f2937" />
      </g>

      <g className="upper">
        <g className="arm arm-l">
          <rect x="11" y="38" width="7" height="22" rx="3.5" fill={shirt} />
          <circle cx="14.5" cy="60" r="3.6" fill={skin} />
        </g>
        <g className="arm arm-r">
          <rect x="42" y="38" width="7" height="22" rx="3.5" fill={shirt} />
          <circle cx="45.5" cy="60" r="3.6" fill={skin} />
        </g>
        <rect x="17" y="36" width="26" height="30" rx="8" fill={shirt} />
        <path d="M24.5 36.5 L30 42 L35.5 36.5" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
        <rect x="27" y="30" width="6" height="7" fill={skin} />

        <circle cx="30" cy="20" r="13" fill={skin} />
        <Hair style={hairStyle} color={hair} />
        <circle cx="21.5" cy="25" r="2.4" fill="#f472b6" opacity="0.35" />
        <circle cx="38.5" cy="25" r="2.4" fill="#f472b6" opacity="0.35" />
        <g className="eyes" fill="#1f2937">
          <circle cx="25" cy="21" r="1.7" />
          <circle cx="35" cy="21" r="1.7" />
        </g>
        {celebrate ? (
          <ellipse cx="30" cy="27.5" rx="3.2" ry="2.6" fill="#7c2d12" />
        ) : (
          <path d="M26 26 Q30 29.5 34 26" stroke="#7c2d12" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        )}
        <Accessory type={accessory} />
      </g>
    </svg>
  );
}
