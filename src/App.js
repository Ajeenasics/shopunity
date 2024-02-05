import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WholesaleDealerRegistration from './Components/wholesaledealer/WholesaleDealerRegistration';
import WholesaleDealerLogin from './Components/wholesaledealer/WholesaleDealerLogin';
import CustomerRegistration from './Components/customer/CustomerRegistration';
import CustomerLogin from './Components/customer/CustomerLogin';
import DeliveryAgentRegistration from './Components/delivery agent/DeliveryAgentRegistration';
import DeliveryagentLogin from './Components/delivery agent/DeliveryagentLogin';
import ShopOwnerRegistration from './Components/ShopOwner/ShopOwnerRegistration';
import ShopOwnerLogin from './Components/ShopOwner/ShopOwnerLogin';
import AdminLogin from './Components/Admin/AdminLogin';
import WholesaleDealerHomepage from './Components/wholesaledealer/WholesaleDealerHomepage';
import ShopownerHomepage from './Components/ShopOwner/ShopownerHomepage';
import DeliveryagentHomepage from './Components/delivery agent/DeliveryagentHomepage';
import CustomerHomePage from './Components/customer/CustomerHomePage';
import LandingPage from './Components/Admin/LandingPage';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={[<LandingPage/>,<Footer/>]}/>

    <Route path='/wholesaledealerregistration' element={[<WholesaleDealerRegistration/>,<Footer/>]} />
    <Route path='/wholesaledealerlogin' element={[<WholesaleDealerLogin/>,<Footer/>]} />

    <Route path='/customerregistration' element={[<CustomerRegistration/>,<Footer/>]} />
    <Route path='/customerlogin' element={[<CustomerLogin/>,<Footer/>]} />

    <Route path='/deliveryagentregistration' element={[<DeliveryAgentRegistration/>,<Footer/>]} />
    <Route path='/deliveryagentlogin' element={[<DeliveryagentLogin/>,<Footer/>]} />

    <Route path='/shopownerregistration' element={[<ShopOwnerRegistration/>,<Footer/>]} />
    <Route path='/shopownerlogin' element={[<ShopOwnerLogin/>,<Footer/>]} />

    <Route path='/Admin' element={[<AdminLogin/>,<Footer/>]} />

    <Route path='/wholesaledealerhome' element={[<WholesaleDealerHomepage/>,<Footer/>]} />
    <Route path='/shopownerhome' element={[<ShopownerHomepage/>,<Footer/>]} />
    <Route path='/deliveryagenthome' element={[<DeliveryagentHomepage/>,<Footer/>]} />
    <Route path='/customerhome' element={[<CustomerHomePage/>,<Footer/>]} />
    <Route path='/footer' element={<Footer/>} />

    </Routes>
     
    </BrowserRouter>
  );
}

export default App;
