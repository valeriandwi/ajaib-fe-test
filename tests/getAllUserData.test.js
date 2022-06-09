import axios from "axios"
import { callAPI } from "../src/app/actions/getAllUserData"

let params = {
    page : 1,
    pageSize : 5,
    results : 10,
    gender : null,
    keyword : null,
    sortBy : null,
    sortOrder : null
}

describe("get result api", () => {
    it('compare all result from API with expected object result', async() => {
        await callAPI({...params}).then(data => {
            expect(data[0]).toEqual(expect.objectContaining({
                email: expect.any(String),
                gender: expect.any(String),
                name: expect.any(String),
                registeredDate : expect.any(String),
                username : expect.any(String)
            }))
        })
    })
    
    it('get all data with all filter',async() => {
        params["gender"] = "male";
        params["keyword"] = "cat";
        params["sortBy"] = "ascend";
        params["sortOrder"] = "email";
        await callAPI({...params}).then(data => {
            expect(data[0]).toEqual(expect.objectContaining({
                email: expect.any(String),
                gender: expect.any(String),
                name: expect.any(String),
                registeredDate : expect.any(String),
                username : expect.any(String)
            }))
        })
    })

    it('error',async() => {
        await callAPI({params}).then(() => {
            throw new Error(500);
        }).catch(err => {
            expect(err).toEqual("error");
        })
    })

})