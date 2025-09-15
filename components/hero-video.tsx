"use client"

import { useEffect, useRef, useState } from "react"

type HeroVideoProps = {
  videoId: string
}

export default function HeroVideo({ videoId }: HeroVideoProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const [needsUnmutePrompt, setNeedsUnmutePrompt] = useState(false)

  // Try to unmute and play via YouTube Iframe API postMessage
  const sendYTCommand = (func: string, args: any[] = []) => {
    const iframe = iframeRef.current
    if (!iframe || !iframe.contentWindow) return
    iframe.contentWindow.postMessage(
      JSON.stringify({ event: "command", func, args }),
      "*"
    )
  }

  useEffect(() => {
    const attemptPlay = () => {
      sendYTCommand("playVideo")
      sendYTCommand("unMute")
      sendYTCommand("setVolume", [100])
    }

    // Initial attempt shortly after mount
    const t = setTimeout(() => {
      attemptPlay()
      setNeedsUnmutePrompt(true)
    }, 600)

    // Retry on visibility change (e.g., returning to tab)
    const onVisibility = () => {
      if (!document.hidden) attemptPlay()
    }
    document.addEventListener("visibilitychange", onVisibility)

    // First user interaction anywhere on page: try to unmute and play
    const onFirstUserInteract = () => {
      attemptPlay()
      setNeedsUnmutePrompt(false)
      window.removeEventListener("pointerdown", onFirstUserInteract)
      window.removeEventListener("keydown", onFirstUserInteract)
    }
    window.addEventListener("pointerdown", onFirstUserInteract, { once: true })
    window.addEventListener("keydown", onFirstUserInteract, { once: true })

    return () => {
      clearTimeout(t)
      document.removeEventListener("visibilitychange", onVisibility)
      window.removeEventListener("pointerdown", onFirstUserInteract)
      window.removeEventListener("keydown", onFirstUserInteract)
    }
  }, [])

  const onUserUnmute = () => {
    sendYTCommand("playVideo")
    sendYTCommand("unMute")
    sendYTCommand("setVolume", [100])
    setNeedsUnmutePrompt(false)
  }

  // Start muted to guarantee autoplay across mobile browsers; we then programmatically unmute
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&rel=0&modestbranding=1&showinfo=0&controls=1&playsinline=1&enablejsapi=1`;

  return (
    <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
      <iframe
        ref={iframeRef}
        width="100%"
        height="100%"
        src={src}
        title="Nondon Real Estate - Experience Luxury Living"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />

      {needsUnmutePrompt && (
        <button
          onClick={onUserUnmute}
          className="absolute inset-x-0 bottom-4 mx-auto w-max rounded-full bg-white/90 backdrop-blur px-4 py-2 text-sm font-medium text-gray-900 shadow hover:bg-white"
        >
          Tap to unmute
        </button>
      )}
    </div>
  )
}


