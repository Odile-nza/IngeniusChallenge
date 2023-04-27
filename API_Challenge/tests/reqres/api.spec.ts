import { test, expect } from '@playwright/test'

//Creating gproup of test and to be executed in parallel
test.describe.parallel("API Testing", () => {
    const baseURL = 'https://reqres.in/api'
  
 
    test("Create new user", async ({ request })=> {

        //Creating a new user with name and job
        const response = await request.post(`${baseURL}/user`,{
            data: {
                "name": "Odile",
                "job": "tester"
            },
        })
        
        //validate HTTP status code to be 201 as user created successfully
        expect(response.status()).toBe(201)

        const responseBody = JSON.parse(await response.text())

       //convert today date into string to be compared with created date
        var d = new Date();
         const d1 = responseBody.createdAt
         let createdDate = d1.substring(0, 10);

         const todayDate =[ d.getFullYear(),
          ('0' + (d.getMonth() + 1)).slice(-2),
          ('0' + d.getDate()).slice(-2)].join('-')
        
        expect(createdDate).toEqual(todayDate)

        //To see the converted date in terminal 
        console.log(responseBody)
        
         
    })
    test("Get 10 single users ", async ({ request })=>{

        //Requesting 10 users from page 1
        const response = await request.get(`${baseURL}/users?page=1&&per_page=10`)
        const responseBody = JSON.parse(await response.text())
        console.log(responseBody)

        //Validatind that all response codes are 200s
          expect(response.status()).toBe(200)

        
    })
     
})