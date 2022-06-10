import axios from 'axios'
import React, {useState, useEffect} from 'react'

function DataFetching() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        // axios.get('https://shadowmere.akiel.dev/api/proxies/?format=json&is_active=true&page=1')


        axios
        .get('https://shadowmere.akiel.dev/api/country-codes')
        .then(response => {
            // console.log(response)
            // setPosts(response.data)
            // console.log(response)
        })
        .catch(err => {
            // console.log(err)
        })
    }, [])

  return posts;
}

export default DataFetching