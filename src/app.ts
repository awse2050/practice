// 타입스크립트로는 const - require 구문 없이 사용이 가능해진다.
import express from 'express'

const app = express()

app.get("/", (req, res, next) => {
    // nodemon 으로 실행했기 때문에 파일이 변경될때 마다 자동재시작해준다.
    console.log("nodemon...")
    res.send("hello!!")
})

app.listen(5000, () => {
    console.log("Server running")
})
