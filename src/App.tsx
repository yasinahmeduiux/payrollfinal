/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { Layout } from './components/Layout';

// Import Pages
import Dashboard from './pages/Dashboard';
import OffersBenefits from './pages/OffersBenefits';
import PayrollOverview from './pages/PayrollOverview';
import PayrollBonus from './pages/PayrollBonus';
import TaxCurrent from './pages/TaxCurrent';
import TaxPrevious from './pages/TaxPrevious';
import TaxAIT from './pages/TaxAIT';
import TaxInvestment from './pages/TaxInvestment';
import TaxAck from './pages/TaxAck';
import RetiralPF from './pages/RetiralPF';
import RetiralGF from './pages/RetiralGF';
import LoanStatus from './pages/LoanStatus';
import LoanApply from './pages/LoanApply';
import LoanTopUp from './pages/LoanTopUp';
import LoanSettlement from './pages/LoanSettlement';
import SalaryInsights from './pages/SalaryInsights';
import Uploads from './pages/Uploads';
import Approvals from './pages/Approvals';
import Profile from './pages/Profile';

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/offers" element={<OffersBenefits />} />
            
            <Route path="/payroll">
              <Route path="overview" element={<PayrollOverview />} />
              <Route path="bonus" element={<PayrollBonus />} />
            </Route>

            <Route path="/tax">
              <Route path="current" element={<TaxCurrent />} />
              <Route path="previous" element={<TaxPrevious />} />
              <Route path="ait" element={<TaxAIT />} />
              <Route path="investment" element={<TaxInvestment />} />
              <Route path="ack" element={<TaxAck />} />
            </Route>

            <Route path="/retiral">
              <Route path="pf" element={<RetiralPF />} />
              <Route path="gf" element={<RetiralGF />} />
            </Route>

            <Route path="/loan">
              <Route path="status" element={<LoanStatus />} />
              <Route path="apply" element={<LoanApply />} />
              <Route path="topup" element={<LoanTopUp />} />
              <Route path="settlement" element={<LoanSettlement />} />
            </Route>

            <Route path="/insights" element={<SalaryInsights />} />
            <Route path="/uploads" element={<Uploads />} />
            <Route path="/approvals" element={<Approvals />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

