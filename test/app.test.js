const req = require("supertest");
//supertest starts app no need to manual app start
const app = require("../src/app.js");

describe("get / ",()=>{
    it("Respone for helloworld",async()=>{
        const res = await req(app).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({message:"helloworld"});
    })
})