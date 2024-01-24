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

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/wholesaledealerregistration' element={<WholesaleDealerRegistration/>} />
    <Route path='/wholesaledealerlogin' element={<WholesaleDealerLogin/>} />
    <Route path='/customerregistration' element={<CustomerRegistration/>} />
    <Route path='/customerlogin' element={<CustomerLogin/>} />
    <Route path='/deliveryagentregistration' element={<DeliveryAgentRegistration/>} />
    <Route path='/deliveryagentlogin' element={<DeliveryagentLogin/>} />
    <Route path='/shopownerregistration' element={<ShopOwnerRegistration/>} />
    <Route path='/shopownerlogin' element={<ShopOwnerLogin/>} />
    <Route path='/Admin' element={<AdminLogin/>} />

    </Routes>
     
    </BrowserRouter>
  );
}

export default App;
