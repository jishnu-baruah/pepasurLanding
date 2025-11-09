export default function NotFound() {
  return (
    <main className="gaming-bg min-h-screen flex items-center justify-center px-4">
      <div className="bg-[#111111] border-4 border-[#8B0000] p-8 md:p-12 max-w-2xl w-full text-center">
        <div className="flex flex-col items-center gap-6">
          <img
            src="/images/design-mode/asur.png"
            alt="Pepasur ASUR"
            className="w-24 h-24 md:w-32 md:h-32 object-contain retro-pulse"
            style={{ imageRendering: "pixelated" }}
          />

          <h1 className="pixel-text-3d-red text-3xl md:text-4xl">404</h1>

          <div className="space-y-4">
            <p className="pixel-text-3d-white text-base md:text-lg">{"Sorry, couldn't find that."}</p>
            <p className="text-[#CCCCCC] text-sm leading-relaxed">
              {"Our team is continuously improving Pepasur. This feature will be available soon!"}
            </p>
          </div>

          <a href="/" className="btn-pixel btn-pixel--large btn-pixel--green mt-4">
            Back to Home
          </a>
        </div>
      </div>
    </main>
  )
}
