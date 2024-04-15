import FormCard from './FormCard'
import ProductCard from './ProductCard'

const App = () => {
  const onFormSubmitted = () => {
    alert('submitted')
  }

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-white p-5 antialiased dark:bg-gray-900">
        <div id="exampleWrapper" className="flex flex-col gap-8">
          <ProductCard />
          <FormCard onSubmit={() => onFormSubmitted()} />
        </div>
      </div>
    </>
  )
}

export default App
