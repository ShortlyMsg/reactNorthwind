import React from 'react'
import {  Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://besthqwallpapers.com/Uploads/18-4-2021/164229/thumb2-alan-walker-logo-grunge-art-turquoise-stone-background-alan-walker-turquoise-logo-alan-walker.jpg"/>
                <Dropdown pointing="top left" text="M.Said">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/> 
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            
            
            </Menu.Item>
        </div>
    )
}
