import React from 'react'

const PageNav = ({ pageNavStyles, navName }: { pageNavStyles: string, navName: string }) => (
  <div className={`${pageNavStyles} text-lg text-black h-full font-display`}>{navName}</div>
)

export default PageNav
