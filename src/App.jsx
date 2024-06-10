import CrossIcon from "./components/icons/CrossIcon.jsx"
import MoonIcon from "./components/icons/MoonIcon.jsx"

const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')]  bg-no-repeat bg-gray-200">
      <header className="container mx-auto px-4 pt-8">

        <div className="flex justify-between ">
          <h1 className="text-3x1 font-semibold uppercase text-white tracking-[0.3em]">Todo</h1>
          <button><MoonIcon fill="#000" /></button>
        </div>

        <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4">
          <span className="inline-block rounded-full border-2 w-5 h-5"></span>
          <input type="text" placeholder="Create a new todo..." className="w-full text-gray-500 outline-none "/>
        </form>

      </header>

      <main className="container mx-auto mt-8 px-4">

        <div className="bg-white rounded-md">


          <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
            <button className="inline-block rounded-full border-2 w-5 h-5"></button>
            <p className="text-gray-600 grow">Complete online Javascript curse in bluuweb</p>
            <button><CrossIcon/></button>
          </article>


          <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
            <button className="inline-block rounded-full border-2 w-5 h-5"></button>
            <p className="grow">Complete online Javascript curse in bluuweb</p>
            <button>
              <CrossIcon/>
            </button>
          </article>


          <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
            <button className="inline-block rounded-full border-2 w-5 h-5"></button>
            <p className="grow">Complete online Javascript curse in bluuweb</p>
            <button><CrossIcon/></button>
          </article>


          <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
            <button className="inline-block rounded-full border-2 w-5 h-5"></button>
            <p className="grow">Complete online Javascript curse in bluuweb</p>
            <button><CrossIcon/></button>
          </article>


          <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
            <button className="inline-block rounded-full border-2 w-5 h-5"></button>
            <p className="grow">Complete online Javascript curse in bluuweb</p>
            <button><CrossIcon/></button>
          </article>


          <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
            <button className="inline-block rounded-full border-2 w-5 h-5"></button>
            <p className="grow">Complete online Javascript curse in bluuweb</p>
            <button><CrossIcon/></button>
          </article>


          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-400"> 5 item left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>


        </div>

      </main>  
        
      <section className="container mx-auto mt-8 px-4">
        <div className="flex justify-center gap-4 rounded-md bg-white p-4">

          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
          
        </div>
        
      </section>

      <p className="text-center">Drag and drop to reorder list</p>
      
    </div>
  )
}

export default App