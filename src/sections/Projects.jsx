
const projects=[
  {title:'Personal Portfolio Website',description:'A modern React.js portfolio to showcase my journey.'},
  {title:'Odor Sensing & Perfume Sprayer',description:'Smart smell detection with auto-perfume spray.'},
  {title:'Automated Mini Car System',description:'Mini vehicle automation with sensors.'}
]
export default function Projects(){
  return (
    <div className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p,i)=>(
          <div key={i} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all hover:scale-105 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-white">{p.title}</h3>
            <p className="text-gray-400">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
