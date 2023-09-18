import connectToDb from "@/utils/connectToDb";
import homeGetInTouchImage from "@/models/home/homeGetInTouchImage";
import { NextResponse } from "next/server";

export async function GET(request, response) {
    try {
        await connectToDb();
        const data = await homeGetInTouchImage.find()
        return NextResponse.json({
            data: data,
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in getting homeGetInTouchImage Details" + e
        }, { status: 500 })
    }
}
export async function POST(request, response) {
    try {

        const body = await request.json();
        await connectToDb();
        await homeGetInTouchImage.create(body)
        return NextResponse.json({
            message: "homeGetInTouchImage details added successfully",
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in adding homeGetInTouchImage Details" + e
        }, { status: 500 })
    }
}
export async function PATCH(request) {
    try {
        const url = new URL(request.url)
        const id = url.searchParams.get("id")
        const body = await request.json();
        await connectToDb();
        await homeGetInTouchImage.findByIdAndUpdate(id, body)
        return NextResponse.json({
            message: "homeGetInTouchImage details updated successfully",
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in updating homeGetInTouchImage Details" + e
        }, { status: 500 })
    }
}
export async function DELETE(request, response) {
    try {
        const url = new URL(request.url)
        const id = url.searchParams.get("id")
        await connectToDb();
        await homeGetInTouchImage.findByIdAndDelete(id)
        return NextResponse.json({
            message: "homeGetInTouchImage details Deleted successfully",
        }, { status: 200 })
    } 
    catch (e) {
        return NextResponse.json({
            message: "Error in deleting homeGetInTouchImage Details" + e
        }, { status: 500 })
    }
}
