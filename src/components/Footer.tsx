export default function Footer() {
  return (
    <footer className="border-t border-violet-700 bg-neutral-900 text-neutral-300">
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Centro Cultural Chivilcoy. Todos los
            derechos reservados.
          </p>
          <p className="mt-2 text-sm text-neutral-400">
            Hecho con ❤️ para nuestra comunidad
          </p>
        </div>
      </div>
    </footer>
  )
}
