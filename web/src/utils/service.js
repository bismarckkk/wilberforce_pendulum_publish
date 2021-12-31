import axios from 'axios'
import sha256 from 'crypto-js/sha256'

export async function getSeries(p) {
  return axios.get('/api/getSeries', {
    responseType: 'json',
    params: p,
  })
}

export async function login(p) {
  p.passwd = sha256(p.passwd + (new Date()).Format('yyyy-MM-dd')).toString()
  return axios.post('/api/login', p)
}

export async function code2teacher(code) {
  return axios.get('/api/code2teacher', {
    responseType: 'json',
    params: { code: code },
  })
}

export async function register(p) {
  return axios.post('/api/register', p)
}

export async function initUser() {
  return axios.get('/api/initUser', {
    responseType: 'json',
  })
}

export async function quit() {
  return axios.get('/api/quit', {
    responseType: 'json',
  })
}

export async function log(p) {
  return axios.get('/api/log', {
    responseType: 'json',
    params: p
  })
}

export async function getShareLink() {
  return axios.get('/api/getShareLink')
}

export async function getStudentData() {
  return axios.get('/api/getStudentData')
}

