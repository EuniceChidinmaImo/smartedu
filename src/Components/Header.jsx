function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-bold text-primary">
          SmartEdge Education
        </div>

        <button className="bg-accent text-primary px-4 py-2 rounded-md font-semibold">
          Book Free Assessment
        </button>
      </div>
    </header>
  );
}
export default Header;
