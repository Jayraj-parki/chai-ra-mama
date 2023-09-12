import connectToDb from "@/utils/connectToDb";
import homeGetInTouch from "@/models/homeGetInTouch";
import { NextResponse } from "next/server";

export async function GET(request, response) {
    try {
        await connectToDb();
        const data = await homeGetInTouch.find()
        return NextResponse.json({
            data: data,
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in getting Message" + e
        }, { status: 500 })
    }
}
export async function POST(request, response) {
    try {

        const body = await request.json();
        await connectToDb();
        await homeGetInTouch.create(body)
        return NextResponse.json({
            message: "Message sent successfully",
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in sending Message" + e
        }, { status: 500 })
    }
}
// export async function PATCH(request) {
//     try {
//         const url = new URL(request.url)
//         const id = url.searchParams.get("id")
//         const body = await request.json();
//         await connectToDb();
//         await homeGetInTouch.findByIdAndUpdate(id, body)
//         return NextResponse.json({
//             message: "homeGetInTouch details updated successfully",
//         }, { status: 200 })
//     }
//     catch (e) {
//         return NextResponse.json({
//             message: "Error in updating homeGetInTouch Details" + e
//         }, { status: 500 })
//     }
// }
export async function DELETE(request, response) {
    try {
        const url = new URL(request.url)
        const id = url.searchParams.get("id")
        await connectToDb();
        await homeGetInTouch.findByIdAndDelete(id)
        return NextResponse.json({
            message: "Message Deleted successfully",
        }, { status: 200 })
    } 
    catch (e) {
        return NextResponse.json({
            message: "Error in deleting Message" + e
        }, { status: 500 })
    }
}
