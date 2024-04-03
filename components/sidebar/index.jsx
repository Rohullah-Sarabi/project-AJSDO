'use client';
import { Dropdown, Navbar } from 'flowbite-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { signOut, useSession } from 'next-auth/react';
import { useContext, useEffect } from 'react';
import AuthContext from '@/context/authContext';



export function NavbarDashboard({state,changeState}) {
    const t = useTranslations("navbar")
    
    const {data} = useSession()

    const {user,setUser} = useContext(AuthContext)

    useEffect(()=>{
        if(data){
            setUser(data?.user)
        }
    },[data,setUser])


    const logoutHandler = ()=>{
        signOut()
    }
    return (
      <Navbar className='bg-[#f7f9fb] w-full'>
        <Navbar.Brand href="/">
          <Image src="/assets/logo.png" width={500} height={500} className="w-16 sm:w-20" alt="AJSDO Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold">AJSDO</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
            <span className='text-blue-700 sm:text-lg sm:font-semibold'>{user?.name}</span>
            }
          >
            <Dropdown.Header>
              <span className="block truncate text-sm font-medium">{user?.email}</span>
            </Dropdown.Header>
            <Dropdown.Item onClick={()=>changeState("events")}>Events</Dropdown.Item>
            <Dropdown.Item onClick={()=>changeState("postEvent")}>Post Event</Dropdown.Item>
            <Dropdown.Item onClick={()=>changeState("setting")}>Settings</Dropdown.Item>
            <Dropdown.Item onClick={()=>changeState("register")} >Register</Dropdown.Item>
            <Dropdown.Item onClick={()=>changeState("users")} >Users</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={logoutHandler}>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href={t("home.url")}  className=' sm:text-lg  text-sm capitalize'>
            {t("home.title")}
          </Navbar.Link>
          <Navbar.Link href={t("program.url")} className='sm:text-lg text-sm capitalize'>{t("program.title")}</Navbar.Link>
          <Navbar.Link href={t("donate.url")} className=' sm:text-lg text-sm capitalize'>{t("donate.title")}</Navbar.Link>
          <Navbar.Link href={t("about.url")} className=' sm:text-lg text-sm capitalize'>{t("about.title")}</Navbar.Link>
          <Navbar.Link href={t("contact.url")} className=' sm:text-lg'>{t("contact.title")}</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }