import HeroCarousel from "@/components/HeroCarousel"
import Menu from "@/components/Menu"
import Event from "@/components/Event"
import Halloween from "@/components/Halloween"

import Link from 'next/link'
import React from 'react'



export default function Home() {
  return (
    <main>
      <Menu />
      <Event />
    </main>
  )
}
