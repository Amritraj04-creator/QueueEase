function Navbar() {
  return (
    <nav className="w-full shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">
          QueueEase
        </h1>

        <div className="flex gap-6">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Login</a>
          <a href="#">Sign Up</a>
          <a href="#">Register Clinic</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar