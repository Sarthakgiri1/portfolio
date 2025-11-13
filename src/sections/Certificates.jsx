
const certificates=[
  'Blockchain Basics',
  'Software Engineering Fundamentals',
  'Red Hat Application Development'
]

export default function Certificates(){
  return (
    <div className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Certificates</h2>
      <div className="bg-gray-800 rounded-xl p-8 max-w-2xl mx-auto">
        <ul className="space-y-4">
          {certificates.map((c,i)=>(
            <li key={i} className="flex items-center gap-3 text-gray-300 text-lg">
              <span className="text-cyan-400">•</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
