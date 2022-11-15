import React, { useEffect, useState } from 'react'

type IconsProps = {
  variant: string;
}

export const Icon: React.FC<IconsProps> = ({ variant }) => {
  const [iconSrc, setIconSrc] = useState();

  useEffect(() => {
    const mount = async () => {
      const result = await import(`../../../public/${variant}.svg`);

      setIconSrc(result.default);
    }

    mount();
  }, [variant])

  return <img src={iconSrc} width="22px" height="22px" alt={variant} />
}
