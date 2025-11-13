
export default function Education(){
  return (
    <div className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Education</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

        <div className="bg-gray-800 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold mb-2 text-white">B.Tech CSE</h3>
          <p className="text-gray-400 mb-2">PCU Institution</p>
          <p className="text-cyan-400 font-semibold">CGPA: 7.10</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold mb-2 text-white">12th Grade</h3>
          <p className="text-gray-400 mb-2">Jain Jr. College</p>
          <p className="text-cyan-400 font-semibold">66%</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold mb-2 text-white">10th Grade</h3>
          <p className="text-gray-400 mb-2">MSS High School </p>
          <p className="text-cyan-400 font-semibold">91%</p>
        </div>

      </div>
    </div>
  )
}
