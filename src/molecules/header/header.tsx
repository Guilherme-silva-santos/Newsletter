import { ToggleTheme } from '../toggleTheme/toggleTheme'

export function Header() {
  return (
    <div className="flex h-20 bg-alura-200 justify-between items-center px-5 sm:rounded-xl sm:m-5">
      {/* a partir de sm que seria uma tela small, ou seja desse tamanho para cima,
      o componente tera um arredondamento das bordas e uma margem de 5 */}
      <span className="text-gray-100">Olá, Usuário</span>
      <h1 className="text-gray-100 text-xl">News Letter</h1>
      <ToggleTheme />
    </div>
  )
}
