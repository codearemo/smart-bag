import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/Signin'
import SearchForBlood from '@/components/SearchForBlood'
import Summary from '@/components/Summary'
import BloodBankSummary from '@/components/BloodBankSummary'
import ScreeningCentreSummary from '@/components/ScreeningCentreSummary'
import Supervisor from '@/components/Supervisor'
import ManageUsers1 from '@/components/ManageUsers1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'search-for-blood',
      component: SearchForBlood
    },
    {
      path: '/signin',
      name: 'sign-in',
      component: SignIn
    },
    {
      path: '/summary',
      name: 'summary',
      component: Summary
    },
    {
      path: '/blood-bank-summary',
      name: 'blood-bank-summary',
      component: BloodBankSummary
    },
    {
      path: '/screening-centre-summary',
      name: 'screening-centre-summary',
      component: ScreeningCentreSummary
    },
    {
      path: '/supervisor',
      name: 'supervisor',
      component: Supervisor
    },
    {
      path: '/manage-users1',
      name: 'manage-users',
      component: ManageUsers1
    }
  ]
})
