import { LogOut } from 'lucide-react'

export function Perfil() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="http://github.com/gabrielFrahm.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Gabriel Marques
        </span>
        <span className="truncate text-sm text-zinc-500">gabriel@test.com</span>
      </div>
      <button
        type="button"
        className="p-2d ml-auto rounded-md hover:bg-zinc-50"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
