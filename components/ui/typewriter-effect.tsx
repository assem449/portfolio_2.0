"use client"

import { useEffect, useState } from "react"
import { motion, useAnimate, useInView } from "framer-motion"

export function TypewriterEffect({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (isInView && !started) {
      setStarted(true)

      const wordsArray = words.map((word) => word.text)
      const textTyped = wordsArray.join(" ")

      let wordIndex = 0
      let charIndex = 0
      let currentWord = words[wordIndex]

      const timeline = [[scope.current, { opacity: 1 }, { duration: 0.3 }]]

      for (let i = 0; i < textTyped.length; i++) {
        const isLastWord = wordIndex === words.length - 1
        const isLastChar = charIndex === currentWord.text.length - 1

        timeline.push([
          `span:nth-of-type(${wordIndex + 1})`,
          {
            opacity: 1,
            display: "inline-block",
          },
          { duration: 0.1, at: i * 0.05 },
        ])

        if (isLastChar && !isLastWord) {
          wordIndex++
          charIndex = 0
          currentWord = words[wordIndex]
        } else {
          charIndex++
        }
      }

      animate(timeline)
    }
  }, [isInView, animate, scope, started, words])

  const renderWords = () => {
    return (
      <div ref={scope} className="opacity-0">
        {words.map((word, idx) => {
          return (
            <span key={`${word}-${idx}`} className={word.className}>
              {word.text}&nbsp;
            </span>
          )
        })}
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <div className="relative inline-block">
        {renderWords()}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className={`absolute right-[-8px] top-0 inline-block h-full w-[2px] bg-blue-500 ${cursorClassName}`}
        />
      </div>
    </div>
  )
}

