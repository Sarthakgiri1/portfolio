
const skills=['Python','React.js','HTML / CSS / JS','C Programming','Git & GitHub','Database Management','AI & ML Fundamentals'];

export default function Skills(){
  return (
    <div className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Skills</h2>
      <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
        {skills.map((s,i)=>(
          <div key={i} className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-full transition-all hover:scale-110 shadow-lg">
            {s}
          </div>
        ))}
      </div>
    </div>
  )
}
