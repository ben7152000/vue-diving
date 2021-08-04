import Mock from 'mockjs'
import { goods, courses, coursesList, users } from './data.json'

// 裝備
Mock.mock('/goods', { code: 200, data: goods })

// 課程資訊
Mock.mock('/courses', { code: 200, data: courses })

// 課程列表資訊
Mock.mock('/courses-list', { code: 200, data: coursesList })

// 使用者
Mock.mock('/users', { code: 200, data: users })
