import { useState } from 'react'
import { Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 to-blue-200">
      <header className="p-6">
        <h1 className="text-4xl md:text-6xl font-bold text-center">FANTASTIC FARTS</h1>
        <p className="text-center text-lg mt-2">A FIBER COMPANY</p>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Welcome to Fantastic Farts</h2>
          <p className="text-lg">
            Discover the power of fiber with our revolutionary supplements. 
            Fantastic Farts is here to transform your digestive health, one supplement at a time.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg">
            Born from a passion for digestive health and a touch of humor, Fantastic Farts 
            started with a simple mission: to make fiber supplements that people actually 
            want to take. Our journey began when we realized that most fiber products on the 
            market were, well, a bit boring. We set out to change that, combining cutting-edge 
            nutritional science with a brand that doesn't take itself too seriously.
          </p>
        </section>
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Stay Updated</h2>
          <p className="mb-4">Be the first to know about our latest products and offers!</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow"
            />
            <Button type="submit" className="bg-pink-500 hover:bg-pink-600">
              <Mail className="mr-2 h-4 w-4" /> Subscribe
            </Button>
          </form>
        </section>
      </main>
      <footer className="bg-gray-100 mt-12 py-6 text-center">
        <p>&copy; 2024 Fantastic Farts. All rights reserved.</p>
      </footer>
    </div>
  )
}