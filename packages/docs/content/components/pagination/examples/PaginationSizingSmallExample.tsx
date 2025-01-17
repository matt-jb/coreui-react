import React from 'react'
import { CPagination, CPaginationItem } from '@coreui/react'

export const PaginationSizingSmallExample = () => {
  return (
    <CPagination size="sm" aria-label="Page navigation example">
      <CPaginationItem>Previous</CPaginationItem>
      <CPaginationItem>1</CPaginationItem>
      <CPaginationItem>2</CPaginationItem>
      <CPaginationItem>3</CPaginationItem>
      <CPaginationItem>Next</CPaginationItem>
    </CPagination>
  )
}
