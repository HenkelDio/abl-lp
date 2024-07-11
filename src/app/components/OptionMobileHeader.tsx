import Link from "next/link";
import { usePathname } from "next/navigation";

type TProps = {
  label: string,
  link: string,
  setShowMobileMenu: Function
}

export function OptionMobileHeader({ label, link, setShowMobileMenu }: TProps) {

  const pathname = usePathname();

  return (
    <>
      <Link href={link}>
        <div className='bg-orange-0 p-5 rounded-md' onClick={() => setShowMobileMenu(false)}>
          <p style={pathname === link ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}>{label}</p>
        </div>
      </Link>
    </>
  )
}