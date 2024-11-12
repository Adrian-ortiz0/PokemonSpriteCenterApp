import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [state, setState] = useState({
        data : null,
        isLoading : true,
        hasError : null,
        error : null,
    })

    const getFetch = async function(url){
        const resp = await fetch(url);

        if(!resp.ok){
            setState({
                data : null,
                isLoading: false,
                hasError : true,
                error : {
                    code : resp.statusCode,
                    message : resp.statusText,
                }
            })
        }

        const data = await resp.json();
        setState({
            data : data,
            isLoading : false,
            hasError : false,
            error : null,
        })
    }

    useEffect(() => {
      getFetch(url);

    }, [url])
    

  return{
    data : state.data,
    isLoading : state.isLoading,
    hasError : state.hasError,
    error : state.error,
  }
}
