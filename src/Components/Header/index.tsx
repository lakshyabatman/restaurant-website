import { DownOutlined, MenuFoldOutlined, MenuOutlined } from '@ant-design/icons/lib/icons'
import { Drawer } from 'antd'
import Button from 'antd/lib/button'
import Dropdown from 'antd/lib/dropdown'
import Menu from 'antd/lib/menu'
import PageHeader from 'antd/lib/page-header'
import React, { useState } from 'react'
import './index.css'



const Header = () => {


  const [showMenu, toggleMenu] = useState(false);


    return (
        <PageHeader

        className="header"
        backIcon={null}
        title={(
            <h3>The Diners</h3>
        )}
        
        extra={(
        <>
        <div className="header-menu">     
            <Button key="2" type="text" shape="round" size="middle" href="#featured">Featured</Button>
            <Button key="1" shape="round" type="ghost" size="middle" href="#reach-us" >
              Contact Us
            </Button>         
        </div>
        <div className="header-menu-hamburger">
        <a className="ant-dropdown-link" onClick={() => toggleMenu(true)}>
            <MenuOutlined /> 
          </a>
        <Drawer visible={showMenu} onClose={() => toggleMenu(false)}>
        <Button key="3" type="text" shape="round" size="middle" >About Us</Button>
        <br/>
        <Button key="2" type="text" shape="round" size="middle" >Featured</Button>
        <br/>
            <Button key="1" shape="round" type="ghost" size="middle"  >
              Contact Us
            </Button>     
        </Drawer>
        </div>
        </>
        )}
          
    />
    )
}


export default Header