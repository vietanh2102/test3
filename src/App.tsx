
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Fragment } from 'react';
import DefaultLayout from './layout/DefaultLayout';
import { publicRoutes } from './routes';
function App() {

  return (
    <>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            let Layout: any = DefaultLayout
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
            )
          })}
        </Routes>
      </Router>
    </>
  )
}

export default App
