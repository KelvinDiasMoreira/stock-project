interface NavigatorProps {
  icon: React.ReactNode;
  name: string;
}

export default function Navigator({icon, name}: NavigatorProps) {
  return (
    <div className="flex flex-col items-center gap-2 group cursor-pointer">
      {icon}
      <h2 className="text-sm text-white font-extrabold group-hover:text-[#daccb4]">{name}</h2>
    </div>
  );
}
