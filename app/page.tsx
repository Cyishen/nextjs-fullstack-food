import HeroCarousel from "@/components/HeroCarousel"
import Menu from "@/components/Menu"

import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <main>
      <Menu />
      <HeroCarousel />
    </main>
  )
}
