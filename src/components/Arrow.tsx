interface ArrowProps {
  direction?: 'left' | 'right';
  className?: string;
  ariaHidden?: boolean;
}

const Arrow: React.FC<ArrowProps> = ({
  direction = 'right',
  className = '',
  ariaHidden = true,
}) => {
  const symbol = direction === 'right' ? '→' : '←';
  return (
    <span className={className} aria-hidden={ariaHidden}>
      {symbol}
    </span>
  );
};

export default Arrow;
