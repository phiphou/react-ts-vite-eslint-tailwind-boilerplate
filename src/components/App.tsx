import ProductCard from './ProductCard'
import FormCard from './FormCard'

const App = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-white p-5 antialiased dark:bg-gray-900">
        <div id="exampleWrapper" className="flex flex-col gap-6">
          <ProductCard />
          <FormCard />
        </div>
      </div>
    </>
  )
}

export default App
