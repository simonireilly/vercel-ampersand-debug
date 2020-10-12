import { useRouter } from 'next/router'

export const getStaticPaths = () => {
 return {
   paths: [],
   fallback: true
 }
}

export const getStaticProps = ({ params }) => {
  console.log({params})

  return {
    props: {},
    revalidate: 1
  }
}


export default function Home() {
  const router = useRouter()

  const { pathname, query } = router

  return(
  <div>
    <pre>
      {JSON.stringify({ pathname, query }, undefined, 2)}
    </pre>
  </div>
  )
}
