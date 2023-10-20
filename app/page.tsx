import { Hero, CustomFilter, SearchBar } from "@/components";

// utility functions
import { fetchCars } from "@/utils";


// components
import {CarCard} from "@/components";


export default async function Home() {

  const allCars = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars
  
  return (
    <>
      <Hero/>
      <main>
        <div className="p-8  ">
          <div className="lg:space-y-2">
            <h1 className=" text-2xl lg:text-4xl font-bold">Car Catalogue</h1>
            <p className="text-primary text-sm lg:text-base ">Explore the cars you might like</p>
          </div>

          <div className="flex justify-between">
            <SearchBar/>
            <div>
              <CustomFilter/>
              <CustomFilter/>
            </div>
          </div>
          {
            !isDataEmpty? 
              <section>
                <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
                  {
                    allCars?.map((car) => (
                      <CarCard car={car} />
                    ))
                  }
                </div>
              </section>
              :
              <div className="mt-16 flex justify-center items-center flex-col gap-2">
                <h3 className="text-dark text-xl font-semibold">Oops! no results</h3>
                {allCars?.message}
              </div>
          }
        </div>
      </main>
    </>
  )
}
