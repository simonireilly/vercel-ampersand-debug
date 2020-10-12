import { useRouter } from 'next/router'

export const getServerSideProps = ({ params, query }) => {
  console.log({params, query})

  return {
    props: {
      serverSideParams: params,
      serverSideQuery: query
    },
  }
}


export default function Home({serverSideParams, serverSideQuery}) {
  const router = useRouter()

  const { query, params } = router

  return(
  <div>
    <pre>
      {JSON.stringify({ query, params }, undefined, 2)}
      {JSON.stringify({ serverSideQuery, serverSideParams }, undefined, 2)}
    </pre>
  </div>
  )
}
