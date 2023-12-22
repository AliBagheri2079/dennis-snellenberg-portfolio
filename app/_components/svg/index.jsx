function child({ name = '', ...props }) {
  switch (name) {
    case 'Circle':
      return <circle {...props} />;

    case 'Rectangle':
      return <rect {...props} />;

    default:
      return <path {...props} />;
  }
}

Svg.Child = child;

export function Svg({
  id,
  className,
  width = '100',
  height = '100',
  viewBox = '',
  children,
  ...props
}) {
  return (
    <svg
      id={id}
      className={className}
      width={width}
      height={height}
      viewBox={viewBox}
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      {...props}
    >
      {children}
    </svg>
  );
}
