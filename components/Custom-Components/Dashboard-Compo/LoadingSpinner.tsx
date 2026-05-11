import { Spinner } from "@/components/ui/spinner"
import React from "react"

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <Spinner className="text-2xl" />
      <h1 className="text-[18px]">Data Loading...</h1>
    </div>
  )
}

export default LoadingSpinner
