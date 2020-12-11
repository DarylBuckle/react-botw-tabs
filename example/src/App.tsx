import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import { BotwTabs } from 'react-botw-tabs'

const App = () => {
  const [activeTab, setActiveTab] = useState<any>("pencil")

  return (
    <div>
      <nav className='navbar botw-menu-item br-none bl-none bt-none fixed-top' style={{ position: "fixed", opacity: 1 }}>
          <div className="botw-menu-item-content" style={{ width: "100%" }}>
            <div className="text-center botw-text mt-3">
              <h5 className="mx-3" style={{ display: "inline-block" }}><a className={'nav-link active'} href='http://github.com/darylbuckle/react-botw-tabs'>Source</a></h5>
              <h2 className="mx-3" style={{ display: "inline-block" }}><a className={'nav-link active'} href='.'>Examples</a></h2>
              <h5 className="mx-3" style={{ display: "inline-block" }}><a className={'nav-link active'} href='http://github.com/darylbuckle/react-botw-menu-components'>Botw Components</a></h5>
            </div>
          </div>
      </nav>
      

      <div className='container-xl' style={{marginTop:'150px'}}>
        <h1 className='mb-3'>React Botw Tabs examples</h1>

        <p className="mb-5">
          * Images from FontAwesome free. You can replace these with your own images.
        </p>

        <div className='mt-3 mb-5'>
          <h2 className='mb-4'>Uncontrolled</h2>
          <div className='row'>
            <div className="col-md-12">
              <BotwTabs
                defaultActiveId={"truck"}
                tabs={[
                  {
                    id: "truck",
                    name: "Truck",
                    faicon: <i className="fa fa-truck" />,
                    content: (
                      <div style={{ textAlign: "center" }}>
                        <h3>This is the Truck tab.</h3>
                      </div>
                    )
                  },
                  {
                    id: "plane",
                    name: "Plane",
                    faicon: <i className="fa fa-plane" />,
                    content: (
                      <div style={{ textAlign: "center" }}>
                        <h3>This is the Plane tab.</h3>
                      </div>
                    )
                  },
                  {
                    id: "car",
                    name: "Car",
                    faicon: <i className="fa fa-car" />,
                    content: (
                      <div style={{ textAlign: "center" }}>
                        <h3>This is the Car tab.</h3>
                      </div>
                    )
                  }
                ]}
              />
            </div>
          </div>
        </div>


        <div className='mt-3 mb-5'>
          <h2 className='mb-4'>Controlled</h2>
          <div className='row'>
            <div className="col-md-12">
              <BotwTabs
                activeId={activeTab}
                onChange={(tab: any) => setActiveTab(tab.id)}
                tabs={[
                  {
                    id: "pencil",
                    name: "Pencil",
                    faicon: <i className="fa fa-pencil" />,
                    content: (
                      <div style={{ textAlign: "center" }}>
                        <h3>This is the Pencil tab.</h3>
                      </div>
                    )
                  },
                  {
                    id: "bomb",
                    name: "Bomb",
                    faicon: <i className="fa fa-bomb" />,
                    content: (
                      <div style={{ textAlign: "center" }}>
                        <h3>This is the Bomb tab.</h3>
                      </div>
                    )
                  },
                  {
                    id: "rocket",
                    name: "Rocket",
                    faicon: <i className="fa fa-rocket" />,
                    content: (
                      <div style={{ textAlign: "center" }}>
                        <h3>This is the Rocket tab.</h3>
                      </div>
                    )
                  }
                ]}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
