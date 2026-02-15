```tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 to-emerald-600 bg-clip-text text-transparent mb-8">
          Designer
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12">
          Mumbai's #1 AI Agency
        </p>
        <a href="https://wa.me/919898773859?text=Hi%20Designer"
           className="bg-emerald-500 hover:bg-emerald-600 text-white px-12 py-6 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3">
          💬 Book Demo (15min)
        </a>
        <p className="mt-8 text-2xl font-semibold text-emerald-600">
          📱 9898773859
        </p>
      </div>
    </main>
  )
}
