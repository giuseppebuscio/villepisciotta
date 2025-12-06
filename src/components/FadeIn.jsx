import { useEffect, useRef, useState } from 'react'

const FadeIn = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
      observer.disconnect()
    }
  }, [delay])

  return (
    <div
      ref={elementRef}
      className={`${isVisible ? 'fade-in' : 'fade-in-hidden'} ${className}`}
    >
      {children}
    </div>
  )
}

export default FadeIn

