export default {
    httpConfig: {
        baseURL: '/project',//dev阶段
        //baseURL: '...',//build阶段
        timeout: 1000,
        headers: {
          'X-API-KEY': 'staff_mobile_lower_apikey'
        }
    }
}