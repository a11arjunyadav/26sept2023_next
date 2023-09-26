//1. Import area
import { Fragment } from 'react'

//2. Defination area
export default function Home() {
  return (
    <>
    <div class="container a_tbdr p-0">
        <header className="a_tbdr d-flex align-items-center">
            <h1 className="ms-2">Chana</h1>
        </header>
        <main className="a_tbdr">
            <div className="row m-0 a_tbdr">
                <div className="col-3 a_tbdr d-grid gap-2 mt-3 a_he">
                    <button className="d-block btn a_back rounded-0 a_t">The Flight</button>
                    <button className="d-block btn a_back rounded-0 a_t">The city</button>
                    <button className="d-block btn a_back rounded-0 a_t">The Island</button>
                    <button className="d-block btn a_back rounded-0 a_t">The Food</button>
                </div>
                <div className="col-6 a_tbdr p-5 a_h">
                    <h1>The City</h1>
                    <p>Chana is the capital of the Chana region on he island of crete. the city can be divided in two parts, the old town and he modern city.</p>
                </div>
                <div className="col-3 a_tbdr p-3 a_h a_back a_t">
                    <h4 className="d-flex justify-content-center a_m">What?</h4>
                    <p>Chana is a city on the island of cete.</p>
                    <h4 className="d-flex justify-content-center a_m">Where?</h4>
                    <p>Crete is a Greek island in the mediteranean sea.</p>
                    <h4 className="d-flex justify-content-center a_m">How?</h4>
                    <p>You can reach chana airport in the island.</p>
                </div>
            </div>
        </main>
        <footer class="a_tbdr">A</footer>
    </div>
    </>
  )
}

//3. Export area
