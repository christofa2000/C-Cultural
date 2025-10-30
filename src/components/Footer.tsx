export default function Footer() {
  return (
    <footer className="border-border bg-background text-muted-foreground border-t">
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Centro Cultural Chivilcoy. Todos los
            derechos reservados.
          </p>
          <p className="text-muted-foreground mt-2 text-sm">
            Hecho con ❤️ para nuestra comunidad
          </p>
        </div>
      </div>
    </footer>
  )
}
