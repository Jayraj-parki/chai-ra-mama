import connectToDb from "@/utils/connectToDb";
import SignUp from "@/models/admin/SignUp";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
    try {
    
        const reqBody = await request.json()
        const {email, password} = reqBody;
        await connectToDb()
        const user = await SignUp.findOne({email})
        if(!user){
            return NextResponse.json({
                message: "User does not Exist",
            }, { status: 400 })
        }
        console.log("hii")

        const validPassword = await bcryptjs.compare(password, user.password)
        if(!validPassword){
            return NextResponse.json({
                message: "Invalid Password",
            }, { status: 400 })
        }
        const tokenData = {
            id: user._id,
            name: user.firstName+user.lastName,
        }
        //create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: "1d"})
        const response = NextResponse.json({
            message: "Sign In successful",
            status: 200,
        })
        response.cookies.set("token", token, {
            httpOnly: true, 

        })
        return response;

    } catch (error) {
        return NextResponse.json({
            message: "Error in Sign In" + error
        }, { status: 500 })
    }
}