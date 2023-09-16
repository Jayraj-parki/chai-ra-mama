import connectToDb from "@/utils/connectToDb";
import menuCard from "@/models/menu/menuCard"; 
import { NextResponse } from "next/server";

export async function GET(request, response) {
    try {
        await connectToDb();
        const data = await menuCard.find()
        return NextResponse.json({
            data: data,
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in getting menuCard Details" + e
        }, { status: 500 })
    }
}
export async function POST(request, response) {
    try {

        const body = await request.json();
        await connectToDb();
        await menuCard.create(body)
        return NextResponse.json({
            message: "menuCard details added successfully",
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in adding menuCard Details" + e
        }, { status: 500 })
    }
}
export async function PATCH(request) {
    try {
        const url = new URL(request.url)
        const id = url.searchParams.get("id")
        const body = await request.json();
        await connectToDb();
        await menuCard.findByIdAndUpdate(id, body)
        return NextResponse.json({
            message: "menuCard details updated successfully",
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in updating menuCard Details" + e
        }, { status: 500 })
    }
}
export async function DELETE(request, response) {
    try {
        const url = new URL(request.url)
        const id = url.searchParams.get("id")
        await connectToDb();
        await menuCard.findByIdAndDelete(id)
        return NextResponse.json({
            message: "menuCard details Deleted successfully",
        }, { status: 200 })
    } 
    catch (e) {
        return NextResponse.json({
            message: "Error in deleting menuCard Details" + e
        }, { status: 500 })
    }
}
