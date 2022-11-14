import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/">Accueil</NavLink>
                <NavLink href="/articles">Articles</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Championnat de France - Tout droit réservé.
              </p>
            </div>
          </Container.Inner>
          <Container.Inner>
            <div className="flex items-center justify-end">
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                Développé avec ❤️par <a href="https://www.linkedin.com/in/baptiste-parmantier/" target="_blank">Baptiste Parmantier</a>
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
