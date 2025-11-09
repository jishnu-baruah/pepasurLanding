"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

export default function Home() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const handlePlayNow = () => {
    window.location.href = "https://aptos.pepasur.xyz"
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        // Always show header at the very top
        setIsHeaderVisible(true)
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsHeaderVisible(false)
      } else {
        // Scrolling up
        setIsHeaderVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return (
    <main className="gaming-bg min-h-screen">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/80 border-b border-[#4A8C4A]/30 transition-transform duration-300 ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/design-mode/asur.png"
              alt="Pepasur"
              className="w-8 h-8 object-contain"
              style={{ imageRendering: "pixelated" }}
            />
            <span className="pixel-text-3d-green text-xs hidden sm:inline">PEPASUR</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#features" className="pixel-text-3d-white text-xs hover:text-[#4A8C4A] transition-colors">
              Features
            </a>
            <a href="#roles" className="pixel-text-3d-white text-xs hover:text-[#4A8C4A] transition-colors">
              Roles
            </a>
            <a href="#how-it-works" className="pixel-text-3d-white text-xs hover:text-[#4A8C4A] transition-colors">
              How It Works
            </a>
            <button onClick={handlePlayNow} className="btn-pixel text-xs px-4 py-2">
              Play Now
            </button>
          </div>
        </div>
      </nav>

      <section id="hero" className="hero-section relative overflow-hidden min-h-screen flex items-center">
        <div className="container mx-auto px-4 z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex flex-col justify-center gap-6 md:gap-8">
              {/* Main title */}
              <h1 className="pixel-text-hero text-5xl md:text-7xl lg:text-8xl leading-tight">PEPASUR</h1>

              {/* Subtitle */}
              <p className="pixel-text-3d-white text-xs md:text-sm">Mafia, but On-chain</p>

              {/* Live badge */}
              <div className="px-4 py-2 border-2 border-[#4A8C4A] bg-[#111111]/80 backdrop-blur w-fit">
                <p className="pixel-text-3d-green text-xs">we're live on Aptos testnet</p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={handlePlayNow} className="btn-pixel-galaxy btn-pixel-galaxy--green">
                  Play Now
                </button>
                <button
                  onClick={() => window.open("https://x.com/0xPepasur", "_blank")}
                  className="btn-pixel-galaxy btn-pixel-galaxy--purple"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative w-full flex items-center justify-center">
                {/* White circular background with glow */}
                <div
                  className="absolute bg-white"
                  style={{
                    width: "clamp(300px, 50vw, 550px)",
                    height: "clamp(300px, 50vw, 550px)",
                    opacity: 1,
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    borderRadius: "50%",
                    boxShadow: "0 0 100px 50px rgba(255, 255, 255, 0.2), 0 0 200px 100px rgba(255, 255, 255, 0.1)",
                  }}
                ></div>

                {/* Hero GIF - Responsive sizing */}
                <img
                  src="/hero.gif"
                  alt="Pepasur Characters"
                  className="relative z-10 object-contain opacity-100 w-full h-auto"
                  style={{
                    maxWidth: "clamp(900px, 100vw, 1400px)",
                    imageRendering: "pixelated",
                    filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-12">
        <h2 className="pixel-text-3d-yellow text-2xl md:text-3xl text-center mb-12">{"Game Features"}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <Card className="bg-[#111111] border-2 border-[#4A8C4A] p-6 hover:border-[#A259FF] transition-all duration-300">
            <div className="flex flex-col gap-4">
              <h3 className="pixel-text-3d-green text-sm md:text-base">{"🎭 Social Deduction"}</h3>
              <p className="text-[#CCCCCC] text-xs leading-relaxed">
                {"Multiplayer Mafia-style gameplay with strategic deception and deduction"}
              </p>
            </div>
          </Card>

          {/* Feature 2 */}
          <Card className="bg-[#111111] border-2 border-[#4A8C4A] p-6 hover:border-[#A259FF] transition-all duration-300">
            <div className="flex flex-col gap-4">
              <h3 className="pixel-text-3d-blue text-sm md:text-base">{"⛓️ On-Chain Mechanics"}</h3>
              <p className="text-[#CCCCCC] text-xs leading-relaxed">
                {"Transparent commit-reveal mechanics powered by blockchain"}
              </p>
            </div>
          </Card>

          {/* Feature 3 */}
          <Card className="bg-[#111111] border-2 border-[#4A8C4A] p-6 hover:border-[#A259FF] transition-all duration-300">
            <div className="flex flex-col gap-4">
              <h3 className="pixel-text-3d-yellow text-sm md:text-base">{"💰 Stake & Earn"}</h3>
              <p className="text-[#CCCCCC] text-xs leading-relaxed">
                {"Stake tokens to play. Winners receive rewards automatically"}
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" className="container mx-auto px-4 py-12">
        <h2 className="pixel-text-3d-red text-2xl md:text-3xl text-center mb-12">{"Mythological Roles"}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* ASUR - Mafia */}
          <Card className="bg-[#111111] border-2 border-[#8B0000] p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center gap-4 text-center">
              <img
                src="/images/design-mode/asur.png"
                alt="ASUR - The Mafia"
                className="w-16 h-16 object-contain"
                style={{ imageRendering: "pixelated" }}
              />
              <h3 className="pixel-text-3d-red text-sm">{"ASUR"}</h3>
              <p className="text-[#CCCCCC] text-xs leading-relaxed">
                {"The Mafia. Eliminate villagers under cover of darkness"}
              </p>
            </div>
          </Card>

          {/* DEV - Doctor */}
          <Card className="bg-[#111111] border-2 border-[#4A8C4A] p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center gap-4 text-center">
              <img
                src="/images/design-mode/dev.png"
                alt="DEV - The Doctor"
                className="w-16 h-16 object-contain"
                style={{ imageRendering: "pixelated" }}
              />
              <h3 className="pixel-text-3d-green text-sm">{"DEV"}</h3>
              <p className="text-[#CCCCCC] text-xs leading-relaxed">
                {"The Doctor. Protect players from elimination each night"}
              </p>
            </div>
          </Card>

          {/* MANAV - Villager */}
          <Card className="bg-[#111111] border-2 border-[#00AAFF] p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center gap-4 text-center">
              <img
                src="/images/design-mode/blueShirt.png"
                alt="MANAV - The Villager"
                className="w-16 h-16 object-contain"
                style={{ imageRendering: "pixelated" }}
              />
              <h3 className="pixel-text-3d-blue text-sm">{"MANAV"}</h3>
              <p className="text-[#CCCCCC] text-xs leading-relaxed">
                {"The Villager. Use logic and voting to find the Mafia"}
              </p>
            </div>
          </Card>

          {/* RISHI - Detective */}
          <Card className="bg-[#111111] border-2 border-[#A259FF] p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center gap-4 text-center">
              <img
                src="/images/design-mode/sage.png"
                alt="RISHI - The Detective"
                className="w-16 h-16 object-contain"
                style={{ imageRendering: "pixelated" }}
              />
              <h3 className="pixel-text-3d-purple text-sm">{"RISHI"}</h3>
              <p className="text-[#CCCCCC] text-xs leading-relaxed">
                {"The Detective. Investigate players to reveal their true role"}
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-4 py-12">
        <h2 className="pixel-text-3d-white text-2xl md:text-3xl text-center mb-12">{"How It Works"}</h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 bg-[#4A8C4A] flex items-center justify-center border-2 border-[#FFFFFF]">
              <span className="pixel-text-3d-white text-2xl">{"1"}</span>
            </div>
            <h3 className="pixel-text-3d-green text-sm">{"Stake Tokens"}</h3>
            <p className="text-[#CCCCCC] text-xs leading-relaxed">{"Players stake tokens to join the game"}</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 bg-[#A259FF] flex items-center justify-center border-2 border-[#FFFFFF]">
              <span className="pixel-text-3d-white text-2xl">{"2"}</span>
            </div>
            <h3 className="pixel-text-3d-purple text-sm">{"Play & Strategize"}</h3>
            <p className="text-[#CCCCCC] text-xs leading-relaxed">{"Use your role abilities and vote strategically"}</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 bg-[#FFEA00] flex items-center justify-center border-2 border-[#FFFFFF]">
              <span className="text-2xl text-[#000000] font-bold">{"3"}</span>
            </div>
            <h3 className="pixel-text-3d-yellow text-sm">{"Win Rewards"}</h3>
            <p className="text-[#CCCCCC] text-xs leading-relaxed">{"Winners receive rewards via smart contracts"}</p>
          </div>
        </div>
      </section>

      {/* Blockchain Features */}
      <section className="container mx-auto px-4 py-12 mb-12">
        <div className="max-w-3xl mx-auto bg-[#111111] border-2 border-[#4A8C4A] p-8">
          <h2 className="pixel-text-3d-green text-xl md:text-2xl text-center mb-8">{"Blockchain-Powered Gaming"}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-xl">{"✅"}</span>
              <div>
                <h4 className="pixel-text-3d-white text-xs mb-2">{"Transparent"}</h4>
                <p className="text-[#CCCCCC] text-xs leading-relaxed">{"All game actions recorded on-chain"}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-xl">{"🔒"}</span>
              <div>
                <h4 className="pixel-text-3d-white text-xs mb-2">{"Secure"}</h4>
                <p className="text-[#CCCCCC] text-xs leading-relaxed">{"Commit-reveal prevents cheating"}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-xl">{"⚡"}</span>
              <div>
                <h4 className="pixel-text-3d-white text-xs mb-2">{"Fast"}</h4>
                <p className="text-[#CCCCCC] text-xs leading-relaxed">{"Real-time gameplay on blockchain"}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-xl">{"💎"}</span>
              <div>
                <h4 className="pixel-text-3d-white text-xs mb-2">{"Fair Rewards"}</h4>
                <p className="text-[#CCCCCC] text-xs leading-relaxed">{"Automatic distribution via smart contracts"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="container mx-auto px-4 py-12 mb-12">
        <div className="flex flex-col items-center text-center gap-6">
          <h2 className="pixel-text-3d-white text-2xl md:text-3xl">{"Ready to Play?"}</h2>
          <p className="text-[#CCCCCC] text-xs md:text-sm max-w-xl leading-relaxed">
            {"Join the first on-chain Mafia game. Stake, strategize, and win"}
          </p>
          <button className="btn-pixel btn-pixel--large retro-pulse" onClick={handlePlayNow}>
            Start Playing
          </button>
        </div>
      </section>
    </main>
  )
}
