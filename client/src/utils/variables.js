export const LandingPageImage =
  'https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80';

export const URL_API_ALL = 'http://localhost:3001/countries';

export const URL_ID = 'http://localhost:3001/countries/';

export const URL_QUERY_NAME = 'http://localhost:3001/countries?name=';

export const POST_URL = 'http://localhost:3001/activity' 

export const URL_ALL_ACTIVITIES = "http://localhost:3001/activity/get"

export function actFilter(arr,name){
  for(let i=0; i<arr.length; i++){
    if(arr[i].name === name){
      return arr[i]
    }
  }
  return false
}