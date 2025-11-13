
import { Mail, Linkedin } from 'lucide-react'

export default function Contact(){
  return (
    <div className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Contact</h2>
      <div className="bg-gray-800 rounded-xl p-8 max-w-2xl mx-auto">
        <div className="space-y-4">

          <div className="flex items-center gap-3 text-gray-300">
            <Mail size={24} className="text-cyan-400"/>
            <span>Email: <a href="mailto:sarthakgirigosavi@gmail.com" className="text-cyan-400 hover:underline">sarthakgirigosavi@gmail.com</a></span>
          </div>

          <div className="flex items-center gap-3 text-gray-300">
            <Linkedin size={24} className="text-cyan-400"/>
            <span>LinkedIn: <a href="https://linkedin.com/in/rohandhope" className="text-cyan-400 hover:underline">linkedin.com/in/sarthakgirigosavi</a></span>
          </div>

        </div>
      </div>
    </div>
  )
}
