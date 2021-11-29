
const style = {
  opacity: .2,
  backgroundImage:  'linear-gradient(red 1px, transparent 1px), linear-gradient(to right, red 1px, transparent 1px)',
  backgroundSize: '10px 10px'
}
function Home() {
  return ( 
    <div className="h-screen">
      <header className="bg-red-100 sticky top-0 z-20">
        <nav className="container mx-auto p-5 flex justify-between">
          <div>NAV</div>
          <ul className="flex">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>  
        </nav>  
      </header> 
      <div className="container mx-auto py-12">
        <h1 className="mb-4">Home Page</h1>
        <div className="grid grid-cols-2">
          <div>
            <div className="bg-red-400 w-full h-1/3 sticky top-20"></div>
          </div>
          <div className="relative ">
            <div className="absolute top-0 left-0 w-full h-full z-0" style={style}></div>
            <div className="relative p-4 z-10 space-y-5">

            <div className="bg-red-200 w-full h-40"></div>
            <div className="bg-red-200 w-full h-40"></div>
            <div className="bg-red-200 w-full h-40"></div>
            <div className="bg-red-200 w-full h-40"></div>
            <div className="bg-red-200 w-full h-40"></div>
            <div className="bg-red-200 w-full h-40"></div>
            <div className="bg-red-200 w-full h-40"></div>
            <div className="bg-red-200 w-full h-40"></div>
            <div className="bg-red-200 w-full h-40"></div>
            <div className="bg-red-200 w-full h-40"></div>
            <div className="bg-red-200 w-full h-40"></div>
            </div>

          </div>
        </div>
      </div>
      <footer className=" bg-red-200">
        <nav className="container mx-auto p-5 py-20 flex justify-between">
          <div>FOOTER</div>
          <ul className="flex">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>  
        </nav>  
      </footer> 
    </div>
  );
}

export default Home; 