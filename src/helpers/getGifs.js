


    export const getGifs = async ( category ) => {
        //El encodeURI es para reemplazar los espacios entre otras cosas
        const url =  `https://api.giphy.com/v1/gifs/search?api_key=g1BIW0NCy2EQsAjk55ZTqI8UrPo98XnQ&q=${ encodeURI(category) }&limit=10;`;

        const resp = await fetch(url);

        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        return gifs;

        //setImages(gifs);

    }