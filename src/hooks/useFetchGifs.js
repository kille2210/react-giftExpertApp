import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //Este código solo se dispara cuando el componente es renderizado por primera vez o si la category cambia
    //Los Effect no puedes ser async
    useEffect(() => {
        getGifs(category)
            .then(imgs => {

                    setState({
                        data: imgs,
                        loading: false
                    });
  

            })
    }, [category])


    return state;

}
