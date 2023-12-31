import { Cog, LifeBuoy, Search } from 'lucide-react'
import Logo from './Logo'
import { MainNavigation } from './MainNavigation'
import { NavItem } from './MainNavigation/NavItem'
import { UserSpaceWidget } from './UserSpaceWidget'
import { Perfil } from './Perfil'
import { InputControl, InputPrefix, InputRoot } from '../Input'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <InputRoot>
        <InputPrefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </InputPrefix>
        <InputControl placeholder="Search" />
      </InputRoot>
      <MainNavigation />

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>
      </div>
      <UserSpaceWidget />

      <div className="h-px bg-zinc-200"></div>
      <Perfil />
    </aside>
  )
}
