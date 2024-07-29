
type TProps = {
  label: string,
  title: string,
  icon: React.ReactNode
}

export function ContactCard({ label, title, icon}: TProps) {
  return(
    <div className="flex flex-col items-center rounded-md p-10 min-w-[400px]" style={{ border: '2px solid #ccc'}}>
      <div className="text-6xl">
        {icon}
      </div>
      <div className="text-center mt-3">
        <p className="text-2xl font-semibold" style={{color: '#1E1E1E'}}>{label}</p>
        <span>{title}</span>
      </div>
    </div>
  )
}