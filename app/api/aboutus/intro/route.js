import connectToDb from "@/utils/connectToDb";
import aboutIntro from "@/models/aboutus/aboutIntro";
import { NextResponse } from "next/server";

export async function GET(request, response) {
    try {
        await connectToDb();
        const data = await aboutIntro.find()
        return NextResponse.json({
            data: data,
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in getting aboutIntro Details" + e
        }, { status: 500 })
    }
}
export async function POST(request, response) {
    try {

        const body = await request.json();
        await connectToDb();
        await aboutIntro.create(body)
        return NextResponse.json({
            message: "aboutIntro details added successfully",
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in adding aboutIntro Details" + e
        }, { status: 500 })
    }
}
export async function PATCH(request) {
    try {
        const url = new URL(request.url)
        const id = url.searchParams.get("id")
        const body = await request.json();
        await connectToDb();
        await aboutIntro.findByIdAndUpdate(id, body)
        return NextResponse.json({
            message: "aboutIntro details updated successfully",
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in updating aboutIntro Details" + e
        }, { status: 500 })
    }
}
export async function DELETE(request, response) {
    try {
        const url = new URL(request.url)
        const id = url.searchParams.get("id")
        await connectToDb();
        await aboutIntro.findByIdAndDelete(id)
        return NextResponse.json({
            message: "aboutIntro details Deleted successfully",
        }, { status: 200 })
    } 
    catch (e) {
        return NextResponse.json({
            message: "Error in deleting aboutIntro Details" + e
        }, { status: 500 })
    }
}
