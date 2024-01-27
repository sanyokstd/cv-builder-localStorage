import { useStore } from "@/store/store"
import { AuthPage, BuildPage } from '@/pages'
import MainLayout from '@/layout/MainLayout'
import { Route, Routes } from "react-router-dom"

function App() {
  const { userName } = useStore(state => state)
  return (
    <>
      {userName ? (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<>My sv</>} />
            <Route path="create-cv" element={<BuildPage />} />
            <Route path="create-cv/:id" element={<BuildPage />} />
          </Route>
        </Routes>
      ) : (
        <AuthPage />
      )}
    </>
  )
}

export default App
