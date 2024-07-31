import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

function SearchBarLoading() {
  return (
    <Skeleton className="h-[54px] max-w-full rounded-[20px]"/>
  )
}

export default SearchBarLoading