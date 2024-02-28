import React from 'react';
import homeLogo from '../../assets/farmacia.jpg'
import './Home.css';


function Home() {
    return (
        <>
        <div className="b flex justify-center">
          <div className='container grid grid-cols-2 text-blue-500'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Farmácia de Todos</h2>
              <p className='text-xl'>Aqui você encontra produtos de qualidade e preço baixo</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-black py-2 px-4'>Produtos</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;