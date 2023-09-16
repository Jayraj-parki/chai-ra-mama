import connectToDb from "@/utils/connectToDb";
import menuList from "@/models/menu/menuList"; 
import { NextResponse } from "next/server";

export async function GET(request, response) {
    try {
        await connectToDb();
        const data = await menuList.find()
        return NextResponse.json({
            data: data,
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in getting menuList Details" + e
        }, { status: 500 })
    }
}
export async function POST(request, response) {
    try {

        const body = await request.json();
        await connectToDb();
        await menuList.create(body)
        return NextResponse.json({
            message: "menuList details added successfully",
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in adding menuList Details" + e
        }, { status: 500 })
    }
}
export async function PATCH(request) {
    try {
        const url = new URL(request.url)
        const id = url.searchParams.get("id")
        const body = await request.json();
        await connectToDb();
        await menuList.findByIdAndUpdate(id, body)
        return NextResponse.json({
            message: "menuList details updated successfully",
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in updating menuList Details" + e
        }, { status: 500 })
    }
}
export async function DELETE(request, response) {
    try {
        const url = new URL(request.url)
        const id = url.searchParams.get("id")
        await connectToDb();
        await menuList.findByIdAndDelete(id)
        return NextResponse.json({
            message: "menuList details Deleted successfully",
        }, { status: 200 })
    } 
    catch (e) {
        return NextResponse.json({
            message: "Error in deleting menuList Details" + e
        }, { status: 500 })
    }
}
