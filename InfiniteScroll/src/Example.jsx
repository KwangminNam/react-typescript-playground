import React, { useCallback, useRef, useState } from 'react'
import usePosts from './hooks/usePost';
import Post from './Post';

export default function Example() {

  const [pageNum, setPageNum] = useState(1);

  const {
    result,
    loading,
    hasNextPage,
    error,
    isError
  } = usePosts(pageNum);

  const intObserver = useRef();
  const lastPostRef = useCallback(post => {
    if (loading) return;
    if (intObserver.current) intObserver.current.disconnect()
    intObserver.current = new IntersectionObserver(posts => {
      if (posts[0].isIntersecting && hasNextPage) {
        console.log('마지막');
        setPageNum(prev => prev + 1);
      }
    })
    if (post) {
      intObserver.current.observe(post)
    }
  }, [loading, hasNextPage]);


  if (isError) return <p>ERROR : {error.message}:</p>

  const content = result.map((item, idx) => {
    if (result.length === idx + 1) {
      return <Post ref={lastPostRef} key={item.id} post={item} />
    }
    return <Post key={item.id} post={item} />
  })

  return (
    <div>
      <h1>INFINITE SCROLL</h1>
      {content}
      {loading && <div>Loading</div>}
    </div>
  )
}
