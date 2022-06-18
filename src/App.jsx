import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CreatePin from "./pages/CreatePin";
import { ForgetPass } from "./pages/ForgetPass";
import LandingPage from "./pages/LandingPage";
import History from "./pages/History";
import Home from "./pages/Home";
import Transfer from "./pages/Transfer";
import TransferInput from "./pages/TransferInput";
import TransferConfirmation from "./pages/TransferConfirmation";
import TransferSucces from "./pages/TransferSucces";
import TransferFailed from "./pages/TransferFailed";
import { TopUp } from "./pages/TopUp";
import { Profile } from "./pages/Profile";
import { PersonalInformation } from "./pages/PersonalInformation";
import { AddPhoneNumber} from "./pages/AddPhoneNumber";
import { ManagePhoneNumber } from "./pages/ManagePhoneNumber";
import ChangePassword from "./pages/ChangePassword";
import ChangePin from "./pages/ChangePin";
import { PayTopUp } from "./pages/PayTopUp";
import ChangeForgetPass from "./pages/ChangeForgetPass";
import FormChangePassForget from "./components/FormAuth/FormChangePassForget";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/transfer" element={<Transfer/>}/>
          <Route path="/transfer/input" element={<TransferInput/>}/>
          <Route path="/transfer/confirmation" element={<TransferConfirmation/>}/>
          <Route path="/transfer/confirmation/succes" element={<TransferSucces/>}/>
          <Route path="/transfer/confirmation/failed" element={<TransferFailed/>}/>
          <Route path="/signin" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/create-pin" element={<CreatePin/>}/>
          <Route path="/forget-password" element={<ForgetPass/>}/>
          <Route path="/forget-password/change-password" element={<ChangeForgetPass/>}/>
          <Route path="/home/history" element={<History/>}/>
          <Route path="/topup" element={<TopUp/>}/>
          <Route path="/profil" element={<Profile/>}/>
          <Route path="/personal-information" element={<PersonalInformation/>}/>
          <Route path="/add-phone" element={<AddPhoneNumber/>}/>
          <Route path="/manage-phone" element={<ManagePhoneNumber/>}/>
          <Route path="/profile/changepassword" element={<ChangePassword/>}/>
          <Route path="/profile/changepin" element={<ChangePin/>}/>
          <Route path="/topup/payment" element={<PayTopUp/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
