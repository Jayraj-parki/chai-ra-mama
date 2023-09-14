import connectToDb from "@/utils/connectToDb";
import aboutWCU from "@/models/aboutus/aboutWCU";
import { NextResponse } from "next/server";

export async function GET(request, response) {
    try {
        await connectToDb();
        const data = await aboutWCU.find()
        return NextResponse.json({
            data: data,
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in getting aboutWCU Details" + e
        }, { status: 500 })
    }
}
export async function POST(request, response) {
    try {

        const body = await request.json();
        await connectToDb();
        await aboutWCU.create(body)
        return NextResponse.json({
            message: "aboutWCU details added successfully",
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in adding aboutWCU Details" + e
        }, { status: 500 })
    }
}
export async function PATCH(request) {
    try {
        const url = new URL(request.url)
        const id = url.searchParams.get("id")
        const body = await request.json();
        await connectToDb();
        await aboutWCU.findByIdAndUpdate(id, body)
        return NextResponse.json({
            message: "aboutWCU details updated successfully",
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in updating aboutWCU Details" + e
        }, { status: 500 })
    }
}
export async function DELETE(request, response) {
    try {
        const url = new URL(request.url)
        const id = url.searchParams.get("id")
        await connectToDb();
        await aboutWCU.findByIdAndDelete(id)
        return NextResponse.json({
            message: "aboutWCU details Deleted successfully",
        }, { status: 200 })
    } 
    catch (e) {
        return NextResponse.json({
            message: "Error in deleting aboutWCU Details" + e
        }, { status: 500 })
    }
}
