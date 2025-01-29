

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { SideMenu } from './component/Sidebar/SideMenu'

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <SideMenu />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/" />} />
            {/* <Route path="/home" element={<Home />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/workflow" element={<WorkflowManagement />} /> */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App