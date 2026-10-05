import { useEffect, useRef } from 'react'

function AuroraFlow() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let animationFrame
    let width = 0
    let height = 0
    let time = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      width = canvas.clientWidth
      height = canvas.clientHeight

      canvas.width = width * dpr
      canvas.height = height * dpr

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      const layers = 10
      const points = Math.max(70, Math.floor(width / 18))

      for (let layer = 0; layer < layers; layer++) {
        const progress = layer / (layers - 1)

        ctx.beginPath()

        for (let i = 0; i <= points; i++) {
          const x = (i / points) * width

          const normalizedX = i / points

          const waveOne =
            Math.sin(normalizedX * 5.5 + time * 0.55 + layer * 0.34) *
            34

          const waveTwo =
            Math.sin(normalizedX * 11 - time * 0.35 + layer * 0.7) *
            17

          const waveThree =
            Math.sin(normalizedX * 2.4 + time * 0.22) *
            42

          const verticalSpread =
            progress * height * 0.38

          const baseY =
            height * 0.43 +
            verticalSpread +
            waveOne +
            waveTwo +
            waveThree

          const y =
            baseY +
            Math.sin(normalizedX * 3 + layer) * 18

          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        const gradient = ctx.createLinearGradient(
          0,
          0,
          width,
          0
        )

        gradient.addColorStop(0, 'rgba(46, 144, 197, 0.08)')
        gradient.addColorStop(0.35, 'rgba(66, 220, 198, 0.28)')
        gradient.addColorStop(0.65, 'rgba(134, 105, 234, 0.30)')
        gradient.addColorStop(1, 'rgba(46, 144, 197, 0.08)')

        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.2 + progress * 0.9
        ctx.globalAlpha = 0.45 + Math.sin(time + layer) * 0.08

        ctx.shadowBlur = 10
        ctx.shadowColor = 'rgba(66, 220, 198, 0.22)'

        ctx.stroke()
      }

      ctx.globalAlpha = 1
      ctx.shadowBlur = 0

      time += 0.006

      animationFrame = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)

    draw()

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="aurora-flow-canvas"
      aria-hidden="true"
    />
  )
}

export default AuroraFlow
