"use client"

import { useState } from "react"

import {
  QueryClient,
} from "@tanstack/react-query"

import {
  PersistQueryClientProvider,
} from "@tanstack/react-query-persist-client"

import {
  createSyncStoragePersister,
} from "@tanstack/query-sync-storage-persister"

export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            gcTime: Infinity,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
          },
        },
      })
  )

  const [persister] = useState(() =>
    createSyncStoragePersister({
      storage:
        typeof window !== "undefined"
          ? window.localStorage
          : undefined,
    })
  )

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister,
      }}
    >
      {children}
    </PersistQueryClientProvider>
  )
}