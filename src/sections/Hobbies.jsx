
import { Bike, Music, Plane, Gamepad2 } from 'lucide-react'

const hobbies=[
  {icon:Bike,label:'Riding Bikes'},
  {icon:Music,label:'Listening to Music'},
  {icon:Plane,label:'Travelling'},
  {icon:Gamepad2,label:'Gaming'}
]

export default function Hobbies(){
  return (
    <div className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Hobbies</h2>
      <div className="bg-gray-800 rounded-xl p-8 max-w-2xl mx-auto">
        <ul className="space-y-4">
          {hobbies.map((h,i)=>{
            const Icon=h.icon
            return (
              <li key={i} className="flex items-center gap-4 text-gray-300 text-lg">
                <Icon size={24} className="text-cyan-400"/>
                <span>{h.label}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
