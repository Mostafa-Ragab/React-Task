import React  from 'react'
import counterpart from "counterpart"
import TemporaryDrawer from '../components/Drawer'
import en from '../language/en'
import ar from '../language/ar'
import './Header.style.css'
counterpart.registerTranslations('en',en)
counterpart.registerTranslations('ar',ar)
counterpart.setLocale('en')

const Header = () => {
    const en=()=>{
        counterpart.setLocale('en');
        document.documentElement.dir='ltr';
    }
    const ar=()=>{
        counterpart.setLocale('ar');
        document.documentElement.dir='rtl';
    }
    return (
      // navbar navbar-expand-md navbar-light mb-4 bg-white shadow
        <div className="container-fluid bg-white shadow" data-dismiss="modal">
            <div className="row">
                <div className="col-sm">
                    <div className="row">
                        {/* <img src="/images/En.png" onClick={en} width="40" height="40" alt="English" className="m-1 p-1" />
                        <img src="/images/Ar.png" onClick={ar} width="40" height="40" alt="Aabic" className="m-1 p-1"/> */}
                        <button type="button" className="btn btn-secondary btn-sm mr-2 active m-1 p-1" onClick={en} value={"en"} width="40" height="80">EN</button>
                        <button type="button" className="btn btn-primary btn-sm m-1 p-1" onClick={ar} value={"ar"} width="40" height="40">AR</button>
                    </div>
                    <div className="row">contactus@mcst.edu.sa</div>
                </div>
                <div className="col-6 mb-2">
                    <div className="justify-content-md-center row ">
                        <img src="/img/logo.png" width="" height="80" alt="mcst"/>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="justify-content-md-end row m-1 p-1">
                        <TemporaryDrawer/> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;



