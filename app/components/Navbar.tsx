"use client"
import Link from 'next/link'
import { Brain } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Brain className="h-8 w-8 text-purple-400" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/about" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link href="/features" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Features</Link>
                <Link href="/contact" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                <Link href="/chatbot" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Chatbot</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
