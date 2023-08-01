import React, { useCallback, useRef } from 'react'
import Post from './Post';
import { useInfiniteQuery } from 'react-query';
import { getPostsPage } from './api/axios'

export default function Example2() {

  const {
    fetchNextPage, // function
    hasNextPage, // boolean
    isFetchingNextPage, //boolean
    data,
    status,
    error
  } = useInfiniteQuery('/posts', ({ pageParam = 1 }) => getPostsPage(pageParam), {
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined;
    }
  });

  const intObserver = useRef();
  const lastPostRef = useCallback(post => {

    if (isFetchingNextPage) return;

    if (intObserver.current) intObserver.current.disconnect();

    intObserver.current = new IntersectionObserver(posts => {
      if (posts[0].isIntersecting && hasNextPage) {
        fetchNextPage()
      }
    })
    if (post) {
      intObserver.current.observe(post)
    }
  }, [isFetchingNextPage, hasNextPage, fetchNextPage]);


  if (status === 'error') return <p>ERROR : {error.message}:</p>;

  const content = data?.pages.map(pg => {
    return pg.map((item, idx) => {
      if (pg.length === idx + 1) {
        return <Post ref={lastPostRef} key={item.id} post={item} />
      }
      return <Post key={item.id} post={item} />
    })
  })

console.log(content);


  return (
    <div>
      <h1>INFINITE SCROLL</h1>
      {content}
      {isFetchingNextPage && <div>Loading</div>}
    </div>
  )
}
