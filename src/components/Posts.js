import React from 'react'

const Posts = ({posts, loading}) => {
    if (loading || posts === undefined) {
        return <h2 className="loading">Loading...</h2>;
    }
    console.log("postsss", { posts } )
    return (
        <>
            {loading ? ('Loading... ') : (
                
                <div>
            {posts.map(post => (
                
                <div className="portfolio" id="portfolio2">
                <img src={post.url} alt="" className="h-full rounded
                mb-20 shadow" />
                <div className="center-content font-bold">
                    <h2 className="text-2xl mb-2">
                        {post.title}
                    </h2>
                    <p className="mb-2">
                        {post.describe}
                    </p>
                    <span className="pro-button">
                        <button onClick={() => window.open( post.viewsite , '_blank')}><strong>View Site</strong></button>
                    </span>
                    <span className="pro-button">
                        <button onClick={() => window.open( post.viewgit , '_blank')}><strong>View Github</strong></button>
                    </span>
                </div>
            </div> 
            ))}
            </div>
         ) }
        
        </>
    )
}

export default Posts