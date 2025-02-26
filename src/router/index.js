import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Postgraduate from '../views/Postgraduate.vue'
import PostgraduatePortrait from "../views/PostgraduatePortrait.vue"
import MentorPortrait from "../views/MentorPortrait.vue"
import BasicStatement from "../views/BasicStatement"

import ThematicAnalysis from "../views/ThematicAnalysis"
import ForecastAlert from "../views/ForecastAlert"
import VerticalMenu from "../components/VerticalMenu"
import PostHome from "../views/PostgraduateHome/PostHome.vue"
import QualityMonitor from "../views/QualityMonitor.vue"

import Login from "@/views/Login";
import Details from "@/views/Details";


const routes = [
  {
    path: '/homepage',
    name: 'homepage',
    component: HomePage,
    redirect: "/posthome",
    children: [{
      path: '/posthome',
      name: 'posthome',
      component: PostHome,
    }]
  },
  {
    path: '/qualitymonitor',
    name: 'qualitymonitor',
    component: QualityMonitor,
    redirect: "/collegenumber",
    children: [{
      path: '/collegenumber',
      name: 'collegenumber',
      component: () => import(/* webpackChunkName: "CollegeNumber" */ '../views/QualityMonitorPage/CollegeNumber.vue'),
    },
    {
      path: '/teachernames',
      name: 'teachernames',
      component: () => import(/* webpackChunkName: "TeacherNames" */ '../views/QualityMonitorPage/TeacherQuality/TeacherNames.vue'),
    },
    {
      path: '/researchsupervisors',
      name: 'researchsupervisors',
      component: () => import(/* webpackChunkName: "ResearchSupervisors" */ '../views/QualityMonitorPage/TeacherQuality/ResearchSupervisors.vue'),
    },
    {
      path: '/professornames',
      name: 'professornames',
      component: () => import(/* webpackChunkName: "ProfessorNames" */ '../views/QualityMonitorPage/TeacherQuality/ProfessorNames.vue'),
    }, {
      path: '/computerscitec',
      name: 'computerscitec',
      component: () => import(/* webpackChunkName: "computerscitec" */ '../views/QualityMonitorPage/CultivationProcess/ComputerSciTec.vue'),
    },
    {
      path: '/informationsecurity',
      name: 'informationsecurity',
      component: () => import(/* webpackChunkName: "informationsecurity" */ '../views/QualityMonitorPage/CultivationProcess/InformationSecurity.vue'),
    },
    {
      path: '/electronicinformation',
      name: 'electronicinformation',
      component: () => import(/* webpackChunkName: "electronicinformation" */ '../views/QualityMonitorPage/CultivationProcess/ElectronicInformation.vue'),
    }, {
      path: '/postacademicachievements',
      name: 'postacademicachievements',
      component: () => import(/* webpackChunkName: "postacademicachievements" */ '../views/QualityMonitorPage/AcademicAchievements/PostAcademicAchievements.vue'),
    },
    {
      path: '/tutoracademicachievements',
      name: 'tutoracademicachievements',
      component: () => import(/* webpackChunkName: "tutoracademicachievements" */ '../views/QualityMonitorPage/AcademicAchievements/TutorAcademicAchievements.vue'),
    },
    {
      path: '/outputvaluetransformation',
      name: 'outputvaluetransformation',
      component: () => import(/* webpackChunkName: "outputvaluetransformation" */ '../views/QualityMonitorPage/AcademicAchievements/OutputValueTransformation.vue'),
    },
    ]
  },
  {
    path: '/postgraduate',
    name: 'postgraduate',
    component: Postgraduate
  },
  {
    path: '/postgraduateportrait',
    name: 'postgraduateportrait',
    component: PostgraduatePortrait,
    redirect: "/postname",
    children: [{
      path: '/postname',
      name: 'postname',
      component: () => import(/* webpackChunkName: "PostName" */ '../views/PostgraduatePortrait/PostName.vue'),

    },
    {
      path: '/postportrait',
      name: 'postportrait',
      component: () => import(/* webpackChunkName: "PostPortrait" */ '../views/PostgraduatePortrait/PostPortrait.vue'),
      props($route) {
        return {
          basicInformation: $route.params.tableData_already,
        }
      }
    }]
  },
  {
    path: '/mentorportrait',
    name: 'mentorportrait',
    component: MentorPortrait
  },
  {
    path: '/basicstatement',
    name: 'basicstatement',
    component: BasicStatement
  },
  {
    path: '/forecastalert',
    name: 'forecastalert',
    component: ForecastAlert
  },
  {
    path: '/thematicanalysis',
    name: 'thematicanalysis',
    component: ThematicAnalysis
  },
  {
    path: '/verticalmenu',
    name: 'verticalmenu',
    component: VerticalMenu
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/details',
    name: 'Details',
    component: Details,
    // children: [{

    // }]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/**
 * 检测登陆状态，isLogin有值可以进行正常跳转，没有值跳转到登陆注册页
 */
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("isLogin")
  if (token || to.path === "/login") {
    // next("/posthome")
    next()
  } else {
    next("/login")
  }
})

export default router
