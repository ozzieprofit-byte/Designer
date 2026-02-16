export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center p-8 text-white">
      <h1 className="text-6xl font-bold mb-8 animate-pulse">
        Expert Emark
      </h1>
      <p className="text-2xl mb-12 text-center max-w-2xl">
        AI-Powered Digital Marketing & Recruitment Solutions
      </p>
      <a
        href="https://wa.me/919898773859"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-xl font-bold py-4 px-8 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
      >
        WhatsApp Chat → 9898773859
      </a>
    </main>
  )
}

export default Home;
