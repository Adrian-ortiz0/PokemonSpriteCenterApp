
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';
import { useCounter } from './hooks/useCounter'
import { useFetch } from './hooks/useFetch'

export const MultipleCustomHook = () => {

    const {counter, increment, decrement} = useCounter(1);
    const url = `https://pokeapi.co/api/v2/pokemon/${counter}`
    const {data, isLoading, hasError, error} = useFetch(url);



  return (
    <>
    <div className='pokemonCard'>
        <h1>Pokémon Center</h1>
        <hr />
        {
            isLoading ? <LoadingMessage /> : <PokemonCard id={data.id} name={data.name} sprites={[
                data.sprites.front_default,
                data.sprites.front_shiny,
                data.sprites.back_default,
                data.sprites.back_shiny
            ]} abilities={data.abilities}/>
        }
        <hr />
        <div className='btnContainer'>
            <button className='btn btn-primary mt-20' onClick={() => counter > 1 ? decrement() : null}>Anterior</button>
            <button className='btn btn-primary mt-20' onClick={() => increment()}>Siguiente</button>
        </div>

    </div>
    </>
  )
}
