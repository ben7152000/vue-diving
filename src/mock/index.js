import Mock from 'mockjs'
import { goods } from './data.json'

Mock.mock('/goods', { code: 200, data: goods })
