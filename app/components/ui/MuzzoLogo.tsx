'use client'

interface MuzzoLogoProps {
  width?: number
  height?: number
  animate?: boolean
  className?: string
}

export function MuzzoLogo({
  width = 120,
  height = 28,
  animate: shouldAnimate = false,
  className = '',
}: MuzzoLogoProps) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://cdn-jkmcd.nitrocdn.com/sxDCNGWafoWtjSofstwSwfeGkvxmEBtI/assets/images/optimized/rev-d5a4e98/muzzo.io/wp-content/uploads/2023/06/muzzo.svg"
        alt="Muzzo"
        width={width}
        height={height}
        style={{ height: `${height}px`, width: 'auto', filter: 'brightness(0) invert(1)' }}
      />
    </div>
  )
}
