'use client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { sanityClient } from '../../utils/client'

const Portfolio = () => {
  const router = useRouter()
  const [portfolioItems, setPortfolioItems] = useState([])
  const pageSlug = router.query.name;

  useEffect(() => {
    if(pageSlug){
      sanityClient
      .fetch(`*[_type == "portfolio" && slug.current == "${pageSlug}" ]`)
      .then(setPortfolioItems)
    }
  }, [pageSlug])

  console.log('router', router.query.name);
  return (
    <div>
      {portfolioItems.map((item) => (
        <div key={item._id} className="text-black wi-8/12 bg-yellow-100">
          <h2 >{item.title}</h2>
          <p>{item.description}</p>
          {/* <img src={item.thumbnail.asset._ref} alt={item.title} /> */}
        </div>
      ))}
    </div>
  )
}

export default Portfolio
