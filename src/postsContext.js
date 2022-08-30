import React, {useState, createContext} from "react"

export const PostsContext = createContext();

export const PostsContextProvider = props => {
    const [posts, setPosts] = useState([]);
    const [fetchData, setFetchData] = useState();

    return (
        <PostsContext.Provider value = {[posts, setPosts]}>
            {props.children}
        </PostsContext.Provider>
    )
}